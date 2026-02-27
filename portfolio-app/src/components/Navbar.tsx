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
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
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
              letterSpacing: '1px'
            }}
          >
            PORTFOLIO<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Button component={RouterLink} to="/" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Work</Button>
            <Button color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Services</Button>
            <Button color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>About</Button>
            <Button 
              variant="contained" 
              color="primary"
              sx={{ ml: 2 }}
            >
              Let's Talk
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
