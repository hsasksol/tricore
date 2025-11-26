import { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import AddWorkoutDialog from '../workouts/AddWorkoutDialog';

export default function Layout({ children, onAddWorkout }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAdd = (workout) => {
    onAddWorkout(workout);
    setDialogOpen(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header onAddWorkout={() => setDialogOpen(true)} />
      <Box component="main" sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
        {children}
      </Box>
      <AddWorkoutDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAdd={handleAdd}
      />
    </Box>
  );
}