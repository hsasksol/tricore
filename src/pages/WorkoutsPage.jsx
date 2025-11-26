import { Box, Card, CardContent, Typography } from '@mui/material';
import SectionHeader from '../components/common/SectionHeader';
import WorkoutCard from '../components/workouts/WorkoutCard';
import { mockWorkouts } from '../services/mockData';

export default function WorkoutsPage() {
  return (
    <Box>
      <Card>
        <CardContent>
          <SectionHeader title="All Workouts" backgroundText="LOG" />
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {mockWorkouts.length} workouts logged
          </Typography>
          {mockWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onClick={() => {}}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}