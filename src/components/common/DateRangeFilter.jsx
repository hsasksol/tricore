import { Box, Button } from '@mui/material';

const DATE_OPTIONS = [
  { key: '7D', label: '7D' },
  { key: '30D', label: '30D' },
  { key: '90D', label: '90D' },
  { key: 'ALL', label: 'All' },
];

export default function DateRangeFilter({ selected, onChange }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        border: '2px solid #000',
      }}
    >
      {DATE_OPTIONS.map(({ key, label }) => {
        const isSelected = selected === key;

        return (
          <Button
            key={key}
            onClick={() => onChange(key)}
            sx={{
              bgcolor: isSelected ? '#000' : 'transparent',
              color: isSelected ? '#fff' : '#000',
              borderRadius: 0,
              minWidth: 48,
              px: 2,
              py: 0.75,
              fontSize: 13,
              fontWeight: 600,
              borderRight: '2px solid #000',
              '&:last-child': {
                borderRight: 'none',
              },
              '&:hover': {
                bgcolor: isSelected ? '#000' : 'rgba(0,0,0,0.05)',
              },
            }}
          >
            {label}
          </Button>
        );
      })}
    </Box>
  );
}
