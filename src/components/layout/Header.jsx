import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import { Add, Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import CircleButton from '../common/CircleButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Workouts', path: '/workouts' },
  { label: 'Races', path: '/races' },
];

export default function Header({ onAddWorkout }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* Logo (visible on all screens) */}
      <Typography
        variant="h4"
        component={Link}
        to="/"
        sx={{
          fontSize: 20,
          fontWeight: 700,
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Box component="span" sx={{ color: 'primary.main' }}>
          TRI
        </Box>
        CORE.AI
      </Typography>

      {/* Desktop nav */}
      <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
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

      {/* Centered add button - mobile only */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <CircleButton size={48} onClick={onAddWorkout} aria-label="Add new workout">
          <Add />
        </CircleButton>
      </Box>

      {/* Right side: Add button (desktop) or burger menu (mobile) */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Add button - desktop only */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <CircleButton size={40} onClick={onAddWorkout} aria-label="Add new workout">
            <Add />
          </CircleButton>
        </Box>

        {/* Burger menu - mobile only */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={handleMenuOpen} sx={{ color: '#fff' }} aria-label="Open navigation menu">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {navItems.map((item) => (
          <MenuItem key={item.path} component={Link} to={item.path} onClick={handleMenuClose}>
            {item.label}
          </MenuItem>
        ))}
        <MenuItem onClick={() => { handleMenuClose(); onAddWorkout(); }}>
          Add Activity
        </MenuItem>
      </Menu>
    </Box>
  );
}
