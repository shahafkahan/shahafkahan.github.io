import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'rgba(5, 10, 17, 0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 2 }}>
                    <Typography
                      variant="h6"
                      component={RouterLink}
                      to="/"
                      sx={{
                        fontWeight: 800,
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        letterSpacing: '1px',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
                      }}
                    >
                      SmartIT<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
                    </Typography>
          
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2, md: 4 } }}>
                      <Button component={RouterLink} to="/" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 }, fontSize: { xs: '0.85rem', sm: '1rem' }, px: { xs: 1, sm: 2 } }}>פתרונות</Button>
                      <Button color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 }, display: { xs: 'none', sm: 'inline-flex' } }}>שירותים</Button>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ 
                          ml: { xs: 1, sm: 2 },
                          px: { xs: 1.5, sm: 3 },
                          py: { xs: 0.5, sm: 1 },
                          fontSize: { xs: '0.8rem', sm: '0.9rem' },
                          minWidth: 'auto'
                        }}
                      >
                        בואו נדבר
                      </Button>
                    </Box>        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
