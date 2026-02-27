import { useParams, Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box, Grid, Chip, Button, Breadcrumbs, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4">Product not found</Typography>
        <Button component={RouterLink} to="/" sx={{ mt: 2 }}>Back to Work</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs sx={{ mb: 2 }}>
            <Link component={RouterLink} to="/" underline="hover" color="inherit">Work</Link>
            <Typography color="text.primary">{product.title}</Typography>
          </Breadcrumbs>
          <Button 
            component={RouterLink} 
            to="/" 
            startIcon={<ArrowBackIcon />}
            sx={{ color: 'text.secondary' }}
          >
            Back to Work
          </Button>
        </Box>

        <Grid container spacing={6}>
          {/* Images Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ mb: 3 }}>
              <img 
                src={product.mainImage} 
                alt={product.title} 
                style={{ width: '100%', borderRadius: '16px', display: 'block' }} 
              />
            </Box>
            <Grid container spacing={2}>
              {product.additionalImages.map((img, idx) => (
                <Grid key={idx} size={{ xs: 6 }}>
                  <img 
                    src={img} 
                    alt={`${product.title} ${idx + 1}`} 
                    style={{ width: '100%', borderRadius: '12px', display: 'block' }} 
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Details Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'sticky', top: '100px' }}>
              <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                {product.category}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
                {product.title}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {product.tags.map((tag) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    variant="outlined" 
                    sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                  />
                ))}
              </Box>

              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 6 }}>
                {product.fullDescription}
              </Typography>

              <Button variant="contained" size="large" fullWidth>
                Inquire About Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail;
