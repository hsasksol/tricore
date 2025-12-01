// Extended mock data for demonstrating filtering
// Covers ~3 months of training data

export const mockWorkouts = [
  // Week of Nov 25 (current)
  { id: '1', discipline: 'run', title: 'Morning Easy Run', date: '2025-11-25', duration_seconds: 2700, distance_meters: 8000, avg_heart_rate: 142, perceived_effort: 4 },
  { id: '2', discipline: 'swim', title: 'Pool Intervals', date: '2025-11-24', duration_seconds: 3600, distance_meters: 2500, avg_heart_rate: 135, perceived_effort: 6 },
  { id: '3', discipline: 'bike', title: 'Trainer Session', date: '2025-11-23', duration_seconds: 5400, distance_meters: 45000, avg_heart_rate: 138, perceived_effort: 5 },
  { id: '4', discipline: 'run', title: 'Tempo Intervals', date: '2025-11-22', duration_seconds: 3000, distance_meters: 6500, avg_heart_rate: 165, perceived_effort: 8 },
  { id: '5', discipline: 'rest', title: 'Recovery Day', date: '2025-11-21', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '6', discipline: 'bike', title: 'Long Ride', date: '2025-11-20', duration_seconds: 10800, distance_meters: 80000, avg_heart_rate: 130, perceived_effort: 6 },
  { id: '7', discipline: 'swim', title: 'Technique Drills', date: '2025-11-19', duration_seconds: 2700, distance_meters: 1800, avg_heart_rate: 125, perceived_effort: 4 },

  // Week of Nov 18
  { id: '8', discipline: 'run', title: 'Long Run', date: '2025-11-18', duration_seconds: 5400, distance_meters: 15000, avg_heart_rate: 145, perceived_effort: 6 },
  { id: '9', discipline: 'swim', title: 'Open Water Sim', date: '2025-11-17', duration_seconds: 3000, distance_meters: 2000, avg_heart_rate: 140, perceived_effort: 5 },
  { id: '10', discipline: 'rest', title: 'Recovery Day', date: '2025-11-16', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '11', discipline: 'bike', title: 'Hill Repeats', date: '2025-11-15', duration_seconds: 4500, distance_meters: 35000, avg_heart_rate: 155, perceived_effort: 7 },
  { id: '12', discipline: 'run', title: 'Recovery Jog', date: '2025-11-14', duration_seconds: 1800, distance_meters: 4000, avg_heart_rate: 130, perceived_effort: 3 },
  { id: '13', discipline: 'swim', title: 'Speed Work', date: '2025-11-13', duration_seconds: 3300, distance_meters: 2800, avg_heart_rate: 150, perceived_effort: 7 },
  { id: '14', discipline: 'bike', title: 'Easy Spin', date: '2025-11-12', duration_seconds: 3600, distance_meters: 30000, avg_heart_rate: 120, perceived_effort: 3 },

  // Week of Nov 11
  { id: '15', discipline: 'run', title: 'Interval Training', date: '2025-11-11', duration_seconds: 3600, distance_meters: 10000, avg_heart_rate: 148, perceived_effort: 5 },
  { id: '16', discipline: 'rest', title: 'Rest Day', date: '2025-11-10', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '17', discipline: 'bike', title: 'Zwift Race', date: '2025-11-09', duration_seconds: 3600, distance_meters: 40000, avg_heart_rate: 162, perceived_effort: 8 },
  { id: '18', discipline: 'swim', title: 'Easy Swim', date: '2025-11-08', duration_seconds: 2400, distance_meters: 1500, avg_heart_rate: 125, perceived_effort: 3 },
  { id: '19', discipline: 'run', title: 'Trail Run', date: '2025-11-07', duration_seconds: 4200, distance_meters: 9000, avg_heart_rate: 152, perceived_effort: 6 },

  // Week of Nov 4
  { id: '20', discipline: 'bike', title: 'Endurance Ride', date: '2025-11-06', duration_seconds: 7200, distance_meters: 60000, avg_heart_rate: 135, perceived_effort: 5 },
  { id: '21', discipline: 'rest', title: 'Rest Day', date: '2025-11-05', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '22', discipline: 'run', title: 'Fartlek Session', date: '2025-11-04', duration_seconds: 2700, distance_meters: 7000, avg_heart_rate: 158, perceived_effort: 7 },
  { id: '23', discipline: 'swim', title: 'Masters Swim', date: '2025-11-03', duration_seconds: 4200, distance_meters: 3500, avg_heart_rate: 142, perceived_effort: 6 },
  { id: '24', discipline: 'bike', title: 'Recovery Ride', date: '2025-11-02', duration_seconds: 5400, distance_meters: 50000, avg_heart_rate: 128, perceived_effort: 4 },

  // Week of Oct 28
  { id: '25', discipline: 'run', title: 'Progression Run', date: '2025-11-01', duration_seconds: 3600, distance_meters: 11000, avg_heart_rate: 155, perceived_effort: 6 },
  { id: '26', discipline: 'swim', title: 'Drill Focus', date: '2025-10-31', duration_seconds: 3000, distance_meters: 2200, avg_heart_rate: 130, perceived_effort: 4 },
  { id: '27', discipline: 'rest', title: 'Recovery', date: '2025-10-30', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '28', discipline: 'bike', title: 'Threshold Intervals', date: '2025-10-29', duration_seconds: 4800, distance_meters: 42000, avg_heart_rate: 160, perceived_effort: 8 },
  { id: '29', discipline: 'run', title: 'Easy Miles', date: '2025-10-28', duration_seconds: 2400, distance_meters: 6000, avg_heart_rate: 138, perceived_effort: 4 },

  // Week of Oct 21
  { id: '30', discipline: 'swim', title: 'Endurance Swim', date: '2025-10-27', duration_seconds: 3600, distance_meters: 3000, avg_heart_rate: 138, perceived_effort: 5 },
  { id: '31', discipline: 'bike', title: 'Recovery Spin', date: '2025-10-26', duration_seconds: 2700, distance_meters: 22000, avg_heart_rate: 115, perceived_effort: 2 },
  { id: '32', discipline: 'run', title: 'Track Workout', date: '2025-10-25', duration_seconds: 3000, distance_meters: 8000, avg_heart_rate: 168, perceived_effort: 9 },
  { id: '33', discipline: 'rest', title: 'Rest Day', date: '2025-10-24', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '34', discipline: 'swim', title: 'Technique + Speed', date: '2025-10-23', duration_seconds: 3300, distance_meters: 2600, avg_heart_rate: 145, perceived_effort: 6 },

  // Week of Oct 14
  { id: '35', discipline: 'bike', title: 'Long Ride', date: '2025-10-22', duration_seconds: 12600, distance_meters: 100000, avg_heart_rate: 132, perceived_effort: 6 },
  { id: '36', discipline: 'run', title: 'Brick Run', date: '2025-10-22', duration_seconds: 1200, distance_meters: 3000, avg_heart_rate: 165, perceived_effort: 7 },
  { id: '37', discipline: 'rest', title: 'Recovery', date: '2025-10-21', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '38', discipline: 'swim', title: 'Pool Sprints', date: '2025-10-20', duration_seconds: 2700, distance_meters: 2000, avg_heart_rate: 155, perceived_effort: 8 },
  { id: '39', discipline: 'run', title: 'Tempo Run', date: '2025-10-19', duration_seconds: 3000, distance_meters: 8500, avg_heart_rate: 162, perceived_effort: 7 },
  { id: '40', discipline: 'bike', title: 'Cadence Drills', date: '2025-10-18', duration_seconds: 3600, distance_meters: 32000, avg_heart_rate: 140, perceived_effort: 5 },

  // Week of Oct 7
  { id: '41', discipline: 'run', title: 'Long Run', date: '2025-10-17', duration_seconds: 6300, distance_meters: 18000, avg_heart_rate: 148, perceived_effort: 6 },
  { id: '42', discipline: 'swim', title: 'Easy Laps', date: '2025-10-16', duration_seconds: 2400, distance_meters: 1600, avg_heart_rate: 120, perceived_effort: 3 },
  { id: '43', discipline: 'bike', title: 'Sweet Spot', date: '2025-10-15', duration_seconds: 5400, distance_meters: 48000, avg_heart_rate: 152, perceived_effort: 6 },
  { id: '44', discipline: 'rest', title: 'Rest Day', date: '2025-10-14', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '45', discipline: 'run', title: 'Hill Sprints', date: '2025-10-13', duration_seconds: 2400, distance_meters: 5500, avg_heart_rate: 170, perceived_effort: 9 },
  { id: '46', discipline: 'swim', title: 'Pull Set', date: '2025-10-12', duration_seconds: 3000, distance_meters: 2400, avg_heart_rate: 135, perceived_effort: 5 },
  { id: '47', discipline: 'bike', title: 'Active Recovery', date: '2025-10-11', duration_seconds: 2700, distance_meters: 20000, avg_heart_rate: 110, perceived_effort: 2 },

  // Week of Sep 30
  { id: '48', discipline: 'run', title: 'Morning Run', date: '2025-10-10', duration_seconds: 3600, distance_meters: 10000, avg_heart_rate: 145, perceived_effort: 5 },
  { id: '49', discipline: 'bike', title: 'Trainer Workout', date: '2025-10-09', duration_seconds: 4500, distance_meters: 38000, avg_heart_rate: 148, perceived_effort: 6 },
  { id: '50', discipline: 'swim', title: 'Kick Set', date: '2025-10-08', duration_seconds: 2700, distance_meters: 1800, avg_heart_rate: 132, perceived_effort: 5 },
  { id: '51', discipline: 'rest', title: 'Rest', date: '2025-10-07', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },

  // Week of Sep 23
  { id: '52', discipline: 'run', title: 'Race Pace', date: '2025-10-06', duration_seconds: 2700, distance_meters: 7500, avg_heart_rate: 172, perceived_effort: 8 },
  { id: '53', discipline: 'bike', title: 'Endurance', date: '2025-10-05', duration_seconds: 7200, distance_meters: 65000, avg_heart_rate: 135, perceived_effort: 5 },
  { id: '54', discipline: 'swim', title: 'IM Set', date: '2025-10-04', duration_seconds: 3600, distance_meters: 3200, avg_heart_rate: 145, perceived_effort: 6 },
  { id: '55', discipline: 'run', title: 'Recovery', date: '2025-10-03', duration_seconds: 1800, distance_meters: 4000, avg_heart_rate: 128, perceived_effort: 3 },
  { id: '56', discipline: 'rest', title: 'Rest Day', date: '2025-10-02', duration_seconds: 0, distance_meters: 0, perceived_effort: 1 },
  { id: '57', discipline: 'bike', title: 'VO2 Intervals', date: '2025-10-01', duration_seconds: 3600, distance_meters: 28000, avg_heart_rate: 168, perceived_effort: 9 },
  { id: '58', discipline: 'swim', title: 'Aerobic Swim', date: '2025-09-30', duration_seconds: 3000, distance_meters: 2500, avg_heart_rate: 138, perceived_effort: 4 },

  // Week of Sep 16
  { id: '59', discipline: 'run', title: 'Long Run', date: '2025-09-29', duration_seconds: 5400, distance_meters: 16000, avg_heart_rate: 150, perceived_effort: 6 },
  { id: '60', discipline: 'bike', title: 'Group Ride', date: '2025-09-28', duration_seconds: 10800, distance_meters: 90000, avg_heart_rate: 142, perceived_effort: 6 },
];

export const mockRaces = [
  { id: '1', name: 'Oslo Triathlon', race_type: 'olympic', date: '2024-06-15', status: 'planned' },
  { id: '2', name: 'Bergen Sprint', race_type: 'sprint', date: '2024-08-20', status: 'planned' },
  { id: '3', name: 'Norseman', race_type: 'ironman', date: '2024-08-03', status: 'planned' },
];

export const getWeeklyStats = (workouts) => {
  const totals = workouts.reduce(
    (acc, w) => ({
      duration: acc.duration + (w.duration_seconds || 0),
      distance: acc.distance + (w.distance_meters || 0),
      swim: acc.swim + (w.discipline === 'swim' ? w.distance_meters || 0 : 0),
      bike: acc.bike + (w.discipline === 'bike' ? w.distance_meters || 0 : 0),
      run: acc.run + (w.discipline === 'run' ? w.distance_meters || 0 : 0),
    }),
    { duration: 0, distance: 0, swim: 0, bike: 0, run: 0 }
  );

  return {
    ...totals,
    workoutCount: workouts.filter((w) => w.discipline !== 'rest').length,
  };
};
