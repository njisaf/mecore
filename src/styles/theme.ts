import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#81c784', // Green from our health bar
      light: '#b2fab4',
      dark: '#519657',
    },
    secondary: {
      main: '#e57373', // Red from our health bar
      light: '#ffa4a2',
      dark: '#af4448',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h6: {
      fontWeight: 500,
      marginBottom: '0.5rem',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#81c784',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;
