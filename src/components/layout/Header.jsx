import { Box, Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import CircleButton from '../common/CircleButton';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Workouts', path: '/workouts' },
  { label: 'Races', path: '/races' },
];

export default function Header({ onAddWorkout }) {
  const location = useLocation();

  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        px: 3,
        py: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontSize: 20, fontWeight: 700 }}>
        <Box component="span" sx={{ color: 'primary.main' }}>
          TRI
        </Box>
        CORE.AI
      </Typography>

      <Box component="nav" sx={{ display: 'flex', gap: 3 }}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : '#fff',
              fontSize: 14,
              borderBottom: location.pathname === item.path ? '2px solid' : '2px solid transparent',
              borderColor: 'primary.main',
              borderRadius: 0,
              px: 0,
              '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      <CircleButton size={40} onClick={onAddWorkout}>
        <Add />
      </CircleButton>
    </Box>
  );
}