import { Box, Typography, Chip } from '@mui/material';
import { Close } from '@mui/icons-material';
import DisciplineFilter from './DisciplineFilter';
import DateRangeFilter from './DateRangeFilter';

export default function FilterBar({
  selectedDisciplines,
  onToggleDiscipline,
  dateRange,
  onDateRangeChange,
  selectedWeek,
  onClearWeek,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        mb: 3,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <DisciplineFilter selected={selectedDisciplines} onToggle={onToggleDiscipline} />

        {selectedWeek !== null && (
          <Chip
            label={`Week ${selectedWeek}`}
            onDelete={onClearWeek}
            deleteIcon={<Close sx={{ fontSize: 16 }} />}
            sx={{
              bgcolor: 'primary.main',
              color: '#000',
              fontWeight: 600,
              borderRadius: 0,
              border: '2px solid #000',
              '& .MuiChip-deleteIcon': {
                color: '#000',
                '&:hover': { color: '#333' },
              },
            }}
          />
        )}
      </Box>

      <DateRangeFilter selected={dateRange} onChange={onDateRangeChange} />
    </Box>
  );
}
