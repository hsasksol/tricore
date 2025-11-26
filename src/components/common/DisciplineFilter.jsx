import { Box, Chip } from '@mui/material';
import { DISCIPLINE_ICONS } from './DisciplineIcon';

const DISCIPLINES = [
  { key: 'swim', label: 'Swim', color: '#000' },
  { key: 'bike', label: 'Bike', color: '#000' },
  { key: 'run', label: 'Run', color: '#000' },
];

export default function DisciplineFilter({ selected, onToggle }) {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {DISCIPLINES.map(({ key, label, color }) => {
        const Icon = DISCIPLINE_ICONS[key];
        const isSelected = selected.includes(key);

        return (
          <Chip
            key={key}
            icon={Icon ? <Icon style={{ color: isSelected ? '#fff' : '#000' }} /> : undefined}
            label={label}
            onClick={() => onToggle(key)}
            sx={{
              bgcolor: isSelected ? color : 'transparent',
              color: isSelected ? '#fff' : '#000',
              border: '2px solid #000',
              borderRadius: 0,
              fontWeight: 600,
              fontSize: 13,
              height: 36,
              transition: 'all 0.2s ease-out',
              '& .MuiChip-icon': {
                ml: 1,
              },
              '&:hover': {
                bgcolor: isSelected ? color : 'rgba(0,0,0,0.05)',
              },
            }}
          />
        );
      })}
    </Box>
  );
}
