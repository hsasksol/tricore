import { Box, Typography } from '@mui/material';

export default function SectionHeader({ title, backgroundText }) {
  return (
    <Box sx={{ position: 'relative', mb: 3 }}>
      {backgroundText && (
        <Typography
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            fontSize: { xs: 60, md: 100 },
            fontWeight: 700,
            lineHeight: 1,
            color: 'primary.main',
            opacity: 0.4,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {backgroundText}
        </Typography>
      )}
      <Typography
        variant="h3"
        sx={{ position: 'relative', zIndex: 1, fontSize: { xs: 22, md: 28 } }}
      >
        {title}
      </Typography>
    </Box>
  );
}
