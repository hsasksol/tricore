import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import SectionHeader from '../components/common/SectionHeader';
import FilterBar from '../components/common/FilterBar';
import VolumeChart from '../components/charts/VolumeChart';
import PaceTrendChart from '../components/charts/PaceTrendChart';
import HRZonesChart from '../components/charts/HRZonesChart';
import TrainingLoadChart from '../components/charts/TrainingLoadChart';
import WorkoutCard from '../components/workouts/WorkoutCard';
import useWorkoutData from '../hooks/useWorkoutData';
import { mockWorkouts } from '../services/mockData';

export default function AnalyticsPage() {
  const {
    selectedDisciplines,
    dateRange,
    selectedWeek,
    highlightedWorkoutId,
    toggleDiscipline,
    setDateRange,
    setHighlightedWorkoutId,
    handleWeekClick,
    clearWeekSelection,
    filteredWorkouts,
    volumeChartData,
    paceTrendData,
    hrZonesData,
    trainingLoadData,
  } = useWorkoutData(mockWorkouts);

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

      <SectionHeader title="Analytics" backgroundText="DATA" />

      <Grid container spacing={3}>
        {/* Volume - Full width */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
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
        </Grid>

        {/* Pace & HR Zones - Half width each */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <PaceTrendChart
                data={paceTrendData}
                highlightedWorkoutId={highlightedWorkoutId}
                onPointHover={setHighlightedWorkoutId}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <HRZonesChart data={hrZonesData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Training Load - Full width */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <TrainingLoadChart data={trainingLoadData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Filtered Workouts Panel */}
        {selectedWeek !== null && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <SectionHeader
                  title={`Week ${selectedWeek} Workouts`}
                  backgroundText="WEEK"
                />
                {filteredWorkouts.length === 0 ? (
                  <Typography color="text.secondary" sx={{ py: 2 }}>
                    No workouts in this week
                  </Typography>
                ) : (
                  <Grid container spacing={2}>
                    {filteredWorkouts.map((workout) => (
                      <Grid item xs={12} md={6} key={workout.id}>
                        <WorkoutCard
                          workout={workout}
                          onClick={() => {}}
                          onMouseEnter={() => setHighlightedWorkoutId(workout.id)}
                          onMouseLeave={() => setHighlightedWorkoutId(null)}
                          highlighted={highlightedWorkoutId === workout.id}
                          compact
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
