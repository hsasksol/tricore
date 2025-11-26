import { useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import CircleButton from '../common/CircleButton';
import { DISCIPLINES } from '../../utils/constants';
import { DISCIPLINE_ICONS } from '../common/DisciplineIcon';
import { formatDuration, formatDistance, formatDate } from '../../utils/formatters';

export default function WorkoutCard({
  workout,
  onClick,
  onMouseEnter,
  onMouseLeave,
  highlighted = false,
  compact = false,
}) {
  const [hovered, setHovered] = useState(false);
  const discipline = DISCIPLINES[workout.discipline];
  const Icon = DISCIPLINE_ICONS[workout.discipline];

  const isActive = hovered || highlighted;

  const handleMouseEnter = () => {
    setHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onMouseLeave?.();
  };

  return (
    <Box
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        py: compact ? 2 : 2.5,
        borderBottom: '2px solid #000',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        bgcolor: highlighted ? 'rgba(238, 251, 19, 0.1)' : 'transparent',
        transition: 'background-color 0.2s ease-out',
      }}
    >
      {/* Accent bar */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -5,
          left: 0,
          width: isActive ? '100%' : 0,
          height: 8,
          bgcolor: 'primary.main',
          transition: 'width 0.35s ease-out',
        }}
      />

      <Box sx={{ flex: 1 }}>
        <Chip
          icon={Icon ? <Icon style={{ color: '#fff' }} /> : null}
          label={discipline?.label || workout.discipline}
          size="small"
          sx={{
            bgcolor: discipline?.color || '#000',
            color: '#fff',
            borderRadius: 0,
            mb: 1,
            '& .MuiChip-icon': { ml: 1 },
          }}
        />
        <Typography variant="h4" sx={{ fontSize: compact ? 16 : 20 }}>
          {workout.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1, fontSize: compact ? 12 : 14 }}>
          {formatDate(workout.date)} · {formatDuration(workout.duration_seconds)}
          {workout.distance_meters > 0 && ` · ${formatDistance(workout.distance_meters)}`}
        </Typography>
      </Box>

      {!compact && (
        <CircleButton size={56}>
          <ArrowForward />
        </CircleButton>
      )}
    </Box>
  );
}
