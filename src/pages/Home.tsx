import { Container, Grid, Typography, Box, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography 
            variant="h1" 
            gutterBottom 
            sx={{ 
              color: '#a29bfe', 
              mb: 2,
              background: 'linear-gradient(to bottom, #a29bfe 0%, #7c4dff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Design Portfolio
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto', 
              color: 'text.secondary',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            A collection of digital products and visual experiences crafted with precision and passion.
          </Typography>
          
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton color="inherit" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}>
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}>
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
