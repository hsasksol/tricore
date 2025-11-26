import { Box, Card, CardContent, Typography } from '@mui/material';
import SectionHeader from '../components/common/SectionHeader';
import WorkoutCard from '../components/workouts/WorkoutCard';

export default function WorkoutsPage({ workouts }) {
  return (
    <Box>
      <Card>
        <CardContent>
          <SectionHeader title="All Workouts" backgroundText="LOG" />
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {workouts.length} workouts logged
          </Typography>
          {workouts.map((workout) => (
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