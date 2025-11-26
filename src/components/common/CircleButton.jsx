import { IconButton } from '@mui/material';

export default function CircleButton({ children, onClick, size = 64, sx = {} }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        border: '2px solid #000',
        color: '#000',
        transition: 'all 0.3s ease-out',
        '&:hover': { bgcolor: '#000', color: 'primary.main' },
        ...sx,
      }}
    >
      {children}
    </IconButton>
  );
}
