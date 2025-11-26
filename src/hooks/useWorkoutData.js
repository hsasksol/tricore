import { useState, useMemo, useCallback } from 'react';

const DISCIPLINE_FILTERS = ['swim', 'bike', 'run'];
const DATE_RANGES = {
  '7D': 7,
  '30D': 30,
  '90D': 90,
  'ALL': null,
};

export default function useWorkoutData(allWorkouts) {
  // Filter state
  const [selectedDisciplines, setSelectedDisciplines] = useState(new Set(DISCIPLINE_FILTERS));
  const [dateRange, setDateRange] = useState('ALL');
  const [highlightedWorkoutId, setHighlightedWorkoutId] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  // Toggle a discipline on/off
  const toggleDiscipline = useCallback((discipline) => {
    setSelectedDisciplines((prev) => {
      const next = new Set(prev);
      if (next.has(discipline)) {
        // Don't allow deselecting all
        if (next.size > 1) {
          next.delete(discipline);
        }
      } else {
        next.add(discipline);
      }
      return next;
    });
  }, []);

  // Set all disciplines at once
  const setDisciplines = useCallback((disciplines) => {
    setSelectedDisciplines(new Set(disciplines));
  }, []);

  // Filter workouts by discipline and date range
  const filteredWorkouts = useMemo(() => {
    const now = new Date();
    const days = DATE_RANGES[dateRange];

    return allWorkouts.filter((workout) => {
      // Discipline filter (always show rest days for context)
      if (workout.discipline !== 'rest' && !selectedDisciplines.has(workout.discipline)) {
        return false;
      }

      // Date filter
      if (days !== null) {
        const workoutDate = new Date(workout.date);
        const cutoff = new Date(now);
        cutoff.setDate(cutoff.getDate() - days);
        if (workoutDate < cutoff) {
          return false;
        }
      }

      // Week filter (from chart click)
      if (selectedWeek !== null) {
        const workoutDate = new Date(workout.date);
        const weekNum = getWeekNumber(workoutDate);
        if (weekNum !== selectedWeek) {
          return false;
        }
      }

      return true;
    });
  }, [allWorkouts, selectedDisciplines, dateRange, selectedWeek]);

  // Compute stats from filtered workouts
  const stats = useMemo(() => {
    const totals = filteredWorkouts.reduce(
      (acc, w) => ({
        duration: acc.duration + (w.duration_seconds || 0),
        distance: acc.distance + (w.distance_meters || 0),
        swim: acc.swim + (w.discipline === 'swim' ? w.distance_meters || 0 : 0),
        bike: acc.bike + (w.discipline === 'bike' ? w.distance_meters || 0 : 0),
        run: acc.run + (w.discipline === 'run' ? w.distance_meters || 0 : 0),
        totalEffort: acc.totalEffort + (w.perceived_effort || 0),
        effortCount: acc.effortCount + (w.perceived_effort ? 1 : 0),
      }),
      { duration: 0, distance: 0, swim: 0, bike: 0, run: 0, totalEffort: 0, effortCount: 0 }
    );

    return {
      ...totals,
      workoutCount: filteredWorkouts.filter((w) => w.discipline !== 'rest').length,
      avgEffort: totals.effortCount > 0 ? (totals.totalEffort / totals.effortCount).toFixed(1) : '--',
    };
  }, [filteredWorkouts]);

  // Generate volume chart data from filtered workouts
  const volumeChartData = useMemo(() => {
    const weeklyData = groupByWeek(filteredWorkouts);
    const weeks = Object.keys(weeklyData).sort();

    return {
      weeks: weeks.map((w) => `W${w}`),
      weekNumbers: weeks.map(Number),
      swim: selectedDisciplines.has('swim')
        ? weeks.map((w) => weeklyData[w].swim / 1000)
        : weeks.map(() => 0),
      bike: selectedDisciplines.has('bike')
        ? weeks.map((w) => weeklyData[w].bike / 1000)
        : weeks.map(() => 0),
      run: selectedDisciplines.has('run')
        ? weeks.map((w) => weeklyData[w].run / 1000)
        : weeks.map(() => 0),
    };
  }, [filteredWorkouts, selectedDisciplines]);

  // Generate pace trend data from filtered workouts
  const paceTrendData = useMemo(() => {
    const series = [];

    if (selectedDisciplines.has('run')) {
      const runWorkouts = filteredWorkouts
        .filter((w) => w.discipline === 'run' && w.distance_meters > 0)
        .map((w) => ({
          x: new Date(w.date).getTime(),
          y: Math.round(w.duration_seconds / (w.distance_meters / 1000)), // sec/km
          id: w.id,
        }))
        .sort((a, b) => a.x - b.x);

      if (runWorkouts.length > 0) {
        series.push({
          name: 'Run',
          color: '#3d3d3d',
          data: runWorkouts,
        });
      }
    }

    if (selectedDisciplines.has('swim')) {
      const swimWorkouts = filteredWorkouts
        .filter((w) => w.discipline === 'swim' && w.distance_meters > 0)
        .map((w) => ({
          x: new Date(w.date).getTime(),
          y: Math.round(w.duration_seconds / (w.distance_meters / 100)), // sec/100m
          id: w.id,
        }))
        .sort((a, b) => a.x - b.x);

      if (swimWorkouts.length > 0) {
        series.push({
          name: 'Swim (per 100m)',
          color: '#000',
          data: swimWorkouts,
        });
      }
    }

    return series;
  }, [filteredWorkouts, selectedDisciplines]);

  // Generate HR zones data from filtered workouts
  const hrZonesData = useMemo(() => {
    const zones = { zone1: 0, zone2: 0, zone3: 0, zone4: 0, zone5: 0 };
    let totalTime = 0;

    filteredWorkouts.forEach((w) => {
      if (!w.avg_heart_rate || !w.duration_seconds) return;

      // Simplified zone calculation based on avg HR
      // In a real app, you'd have actual time-in-zone data
      const hr = w.avg_heart_rate;
      const duration = w.duration_seconds;
      totalTime += duration;

      if (hr < 120) zones.zone1 += duration;
      else if (hr < 140) zones.zone2 += duration;
      else if (hr < 155) zones.zone3 += duration;
      else if (hr < 170) zones.zone4 += duration;
      else zones.zone5 += duration;
    });

    // Convert to percentages
    if (totalTime > 0) {
      return {
        zone1: Math.round((zones.zone1 / totalTime) * 100),
        zone2: Math.round((zones.zone2 / totalTime) * 100),
        zone3: Math.round((zones.zone3 / totalTime) * 100),
        zone4: Math.round((zones.zone4 / totalTime) * 100),
        zone5: Math.round((zones.zone5 / totalTime) * 100),
      };
    }

    return { zone1: 20, zone2: 30, zone3: 25, zone4: 15, zone5: 10 };
  }, [filteredWorkouts]);

  // Generate training load data from filtered workouts
  const trainingLoadData = useMemo(() => {
    const weeklyData = groupByWeek(filteredWorkouts);
    const weeks = Object.keys(weeklyData).sort();

    // Simple TSS approximation: duration * intensity factor
    const calculateTSS = (weekWorkouts) => {
      return weekWorkouts.reduce((total, w) => {
        const intensityFactor = (w.perceived_effort || 5) / 5;
        const hours = (w.duration_seconds || 0) / 3600;
        return total + Math.round(hours * 100 * intensityFactor);
      }, 0);
    };

    return {
      weeks: weeks.map((w) => `W${w}`),
      tss: weeks.map((w) => calculateTSS(weeklyData[w].workouts)),
    };
  }, [filteredWorkouts]);

  // Handle chart click (select a week)
  const handleWeekClick = useCallback((weekIndex, weekNumbers) => {
    if (weekNumbers && weekNumbers[weekIndex] !== undefined) {
      setSelectedWeek((prev) =>
        prev === weekNumbers[weekIndex] ? null : weekNumbers[weekIndex]
      );
    }
  }, []);

  // Clear week selection
  const clearWeekSelection = useCallback(() => {
    setSelectedWeek(null);
  }, []);

  return {
    // State
    selectedDisciplines: Array.from(selectedDisciplines),
    dateRange,
    highlightedWorkoutId,
    selectedWeek,

    // Actions
    toggleDiscipline,
    setDisciplines,
    setDateRange,
    setHighlightedWorkoutId,
    handleWeekClick,
    clearWeekSelection,

    // Derived data
    filteredWorkouts,
    stats,
    volumeChartData,
    paceTrendData,
    hrZonesData,
    trainingLoadData,
  };
}

// Helper: Get ISO week number
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

// Helper: Group workouts by week
function groupByWeek(workouts) {
  const weeks = {};

  workouts.forEach((w) => {
    if (w.discipline === 'rest') return;

    const weekNum = getWeekNumber(new Date(w.date));
    if (!weeks[weekNum]) {
      weeks[weekNum] = { swim: 0, bike: 0, run: 0, workouts: [] };
    }

    weeks[weekNum].workouts.push(w);

    if (w.discipline === 'swim') weeks[weekNum].swim += w.distance_meters || 0;
    if (w.discipline === 'bike') weeks[weekNum].bike += w.distance_meters || 0;
    if (w.discipline === 'run') weeks[weekNum].run += w.distance_meters || 0;
  });

  return weeks;
}

export { DISCIPLINE_FILTERS, DATE_RANGES };
