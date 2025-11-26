import { Box } from '@mui/material';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header onAddWorkout={() => console.log('Add workout')} />
      <Box component="main" sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
        {children}
      </Box>
    </Box>
  );
}