import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import WorkoutCard from '../components/workouts/WorkoutCard';
import DisciplineBar from '../components/dashboard/DisciplineBar';
import FilterBar from '../components/common/FilterBar';
import VolumeChart from '../components/charts/VolumeChart';
import PaceTrendChart from '../components/charts/PaceTrendChart';
import HRZonesChart from '../components/charts/HRZonesChart';
import TrainingLoadChart from '../components/charts/TrainingLoadChart';
import useWorkoutData from '../hooks/useWorkoutData';
import { formatDuration } from '../utils/formatters';

export default function DashboardPage({ workouts }) {
  const {
    selectedDisciplines,
    dateRange,
    selectedWeek,
    toggleDiscipline,
    setDateRange,
    clearWeekSelection,
    highlightedWorkoutId,
    setHighlightedWorkoutId,
    handleWeekClick,
    filteredWorkouts,
    stats,
    volumeChartData,
    paceTrendData,
    hrZonesData,
    trainingLoadData,
  } = useWorkoutData(workouts);

  const maxDistance = Math.max(stats.swim, stats.bike, stats.run);

  return (
    <Box>
      {/* Filters */}
      <FilterBar
        selectedDisciplines={selectedDisciplines}
        onToggleDiscipline={toggleDiscipline}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        selectedWeek={selectedWeek}
        onClearWeek={clearWeekSelection}
      />

      {/* Hero + Discipline Volume Row */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
        <Card sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              sx={{
                position: 'absolute',
                right: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: { xs: 100, md: 180 },
                fontWeight: 700,
                color: 'primary.main',
                opacity: 0.3,
                lineHeight: 1,
              }}
            >
              {stats.workoutCount}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: 14,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                mb: 1,
              }}
            >
              {dateRange === 'ALL' ? 'All Time' : `Last ${dateRange}`}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 36 } }}>
              {stats.workoutCount > 0 ? 'Great progress!' : 'No workouts found'}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 500 }}>
              {stats.workoutCount > 0 ? (
                <>
                  You've completed {stats.workoutCount} workouts totaling{' '}
                  {formatDuration(stats.duration)}. Keep up the momentum.
                </>
              ) : (
                'Try adjusting your filters to see more data.'
              )}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <SectionHeader title="Discipline Volume" backgroundText="VOL" />
            <Box sx={{ mt: 4 }}>
              {selectedDisciplines.includes('swim') && (
                <DisciplineBar
                  discipline="swim"
                  distance={stats.swim}
                  maxDistance={maxDistance}
                  index={0}
                />
              )}
              {selectedDisciplines.includes('bike') && (
                <DisciplineBar
                  discipline="bike"
                  distance={stats.bike}
                  maxDistance={maxDistance}
                  index={1}
                />
              )}
              {selectedDisciplines.includes('run') && (
                <DisciplineBar
                  discipline="run"
                  distance={stats.run}
                  maxDistance={maxDistance}
                  index={2}
                />
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <StatCard
          label="Total Distance"
          value={(stats.distance / 1000).toFixed(0)}
          unit="km"
          accent
        />
        <StatCard
          label="Training Time"
          value={Math.round(stats.duration / 3600)}
          unit="hrs"
        />
        <StatCard label="Workouts" value={stats.workoutCount} />
        <StatCard label="Avg Effort" value={stats.avgEffort} unit="/10" />
      </Box>

      {/* Row 1: Training Load & HR Zones */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
        <Card>
          <CardContent>
            <SectionHeader title="Training Load" backgroundText="TSS" />
            <TrainingLoadChart data={trainingLoadData} />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <SectionHeader title="HR Zones" backgroundText="HR" />
            <HRZonesChart data={hrZonesData} />
          </CardContent>
        </Card>
      </Box>

      {/* Row 2: Weekly Volume & Pace Trends */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
        <Card>
          <CardContent>
            <SectionHeader title="Weekly Volume" backgroundText="VOL" />
            <VolumeChart
              data={volumeChartData}
              onWeekClick={handleWeekClick}
              selectedWeek={selectedWeek}
            />
            <Typography
              color="text.secondary"
              sx={{ mt: 1, fontSize: 12, textAlign: 'center' }}
            >
              Click a week to filter workouts
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <SectionHeader title="Pace Trends" backgroundText="PACE" />
            <PaceTrendChart
              data={paceTrendData}
              highlightedWorkoutId={highlightedWorkoutId}
              onPointHover={setHighlightedWorkoutId}
            />
          </CardContent>
        </Card>
      </Box>

      {/* Row 3: Recent Workouts (Full Width) */}
      <Card>
        <CardContent>
          <SectionHeader title="Recent Workouts" backgroundText="LOG" />
          {filteredWorkouts.length === 0 ? (
            <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
              No workouts match your filters
            </Typography>
          ) : (
            filteredWorkouts.slice(0, 6).map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onClick={() => {}}
                onMouseEnter={() => setHighlightedWorkoutId(workout.id)}
                onMouseLeave={() => setHighlightedWorkoutId(null)}
                highlighted={highlightedWorkoutId === workout.id}
              />
            ))
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
