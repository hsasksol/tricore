import { useState } from 'react';
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
        position: 'relative',
      }}
    >
      {/* Mobile menu button */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
        <IconButton
          onClick={handleMenuOpen}
          sx={{ color: '#fff' }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Desktop logo */}
      <Typography
        variant="h4"
        component={Link}
        to="/"
        sx={{
          fontSize: 20,
          fontWeight: 700,
          textDecoration: 'none',
          color: 'inherit',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box component="span" sx={{ color: 'primary.main' }}>
          TRI
        </Box>
        CORE.AI
      </Typography>

      {/* Centered add button on mobile */}
      <Box
        sx={{
          position: { xs: 'absolute', md: 'static' },
          left: { xs: '50%' },
          transform: { xs: 'translateX(-50%)' },
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <CircleButton size={48} onClick={onAddWorkout}>
          <Add />
        </CircleButton>
      </Box>

      {/* Desktop nav */}
      <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, marginLeft: 3 }}>
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

      {/* Desktop add button (right) */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, marginLeft: 'auto' }}>
        <CircleButton size={40} onClick={onAddWorkout}>
          <Add />
        </CircleButton>
      </Box>

      {/* Mobile Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {navItems.map((item) => (
          <MenuItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleMenuClose}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        bgcolor: '#000',
        color: '#fff',
        px: 3,
        py: 2,
        return (
          <Box
            sx={{
              bgcolor: '#000',
              color: '#fff',
              px: 2,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Mobile menu button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                onClick={handleMenuOpen}
                sx={{ color: '#fff' }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop logo */}
            <Typography
              variant="h4"
              component={Link}
              to="/"
              sx={{
                fontSize: 20,
                fontWeight: 700,
                textDecoration: 'none',
                color: 'inherit',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Box component="span" sx={{ color: 'primary.main' }}>
                TRI
              </Box>
              CORE.AI
            </Typography>

            {/* Centered add button on mobile */}
            <Box
              sx={{
                position: { xs: 'absolute', md: 'static' },
                left: { xs: '50%' },
                transform: { xs: 'translateX(-50%)' },
                display: 'flex',
                alignItems: 'center',
                zIndex: 10,
              }}
            >
              <CircleButton size={48} onClick={onAddWorkout}>
                <Add />
              </CircleButton>
            </Box>

            {/* Desktop nav */}
            <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, marginLeft: 3 }}>
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

            {/* Desktop add button (right) */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, marginLeft: 'auto' }}>
              <CircleButton size={40} onClick={onAddWorkout}>
                <Add />
              </CircleButton>
            </Box>

            {/* Mobile Menu */}
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              {navItems.map((item) => (
                <MenuItem
                  key={item.path}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        );
        <Add />
      </CircleButton>
    </Box>
  );
}