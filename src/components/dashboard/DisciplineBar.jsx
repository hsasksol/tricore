import { Box, Typography } from '@mui/material';
import { DISCIPLINES } from '../../utils/constants';
import { DISCIPLINE_ICONS } from '../common/DisciplineIcon';
import { formatDistance } from '../../utils/formatters';

export default function DisciplineBar({ discipline, distance, maxDistance, index }) {
  const config = DISCIPLINES[discipline];
  const Icon = DISCIPLINE_ICONS[discipline];
  const percentage = maxDistance > 0 ? (distance / maxDistance) * 100 : 0;
  const fills = ['#000', '#EEFB13', '#3d3d3d'];

  return (
    <Box sx={{ mb: 2.5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: 14,
          }}
        >
          {Icon && <Icon />} {config?.label}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: 14 }}>
          {formatDistance(distance)}
        </Typography>
      </Box>
      <Box
        sx={{
          height: 12,
          bgcolor: '#e3e3df',
          position: 'relative',
          border: '2px solid #000',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${percentage}%`,
            bgcolor: fills[index % 3],
            transition: 'width 0.5s ease-out',
          }}
        />
      </Box>
    </Box>
  );
}
