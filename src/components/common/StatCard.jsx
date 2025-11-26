import { Box, Typography } from '@mui/material';

export default function StatCard({ label, value, unit, accent = false }) {
  return (
    <Box
      sx={{
        p: 3,
        border: '2px solid #000',
        bgcolor: accent ? 'primary.main' : 'background.paper',
        flex: 1,
        minWidth: 140,
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: 36, md: 48 }, lineHeight: 1 }}
      >
        {value}
        {unit && (
          <Typography component="span" sx={{ fontSize: 18, ml: 0.5 }}>
            {unit}
          </Typography>
        )}
      </Typography>
      <Typography
        sx={{
          mt: 1.5,
          fontSize: 12,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
