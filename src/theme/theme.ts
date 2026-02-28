import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c4dff', // Deep Purple/Blue
    },
    secondary: {
      main: '#b388ff',
    },
    background: {
      default: '#050a11', // Very dark background
      paper: '#0d131c',   // Darker paper/card background
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '0.75rem',
      color: '#7c4dff',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 24,
          padding: '10px 24px',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #7c4dff 30%, #b388ff 90%)',
          boxShadow: '0 3px 5px 2px rgba(124, 77, 255, .3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d131c',
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(124, 77, 255, 0.3)',
          },
        },
      },
    },
  },
});

export default theme;
