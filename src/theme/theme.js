import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4E600', // Mørkere lime for bedre kontrast (WCAG AA compliant)
      contrastText: '#000',
    },
    secondary: {
      main: '#000',
      contrastText: '#fff',
    },
    background: {
      default: '#e3e3df',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#888',
    },
    divider: '#000',
  },
  typography: {
    fontFamily: '"Hind", "system-ui", sans-serif',
    h1: { fontFamily: '"Vazirmatn", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Vazirmatn", sans-serif', fontWeight: 600 },
    h3: { fontFamily: '"Vazirmatn", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Vazirmatn", sans-serif', fontWeight: 500 },
    button: { fontFamily: '"Vazirmatn", sans-serif', fontWeight: 500, textTransform: 'none' },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { 
          borderRadius: 0, 
          padding: '14px 28px', 
          boxShadow: 'none',
          '&:focus-visible': {
            outline: '3px solid #D4E600',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 0, boxShadow: 'none', border: '2px solid #000' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': { borderColor: '#ebebeb' },
            '&:hover fieldset': { borderColor: '#000' },
            '&.Mui-focused fieldset': { borderColor: '#000', borderWidth: 1 },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '3px solid #D4E600',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: '3px solid #D4E600',
            outlineOffset: '2px',
          },
        },
      },
    },
  },
});

export default theme;