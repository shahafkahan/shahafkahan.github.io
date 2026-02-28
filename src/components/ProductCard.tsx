import { Card, CardMedia, Typography, Box, Chip } from '@mui/material';
import type { Product } from '../data/products';
import { Link as RouterLink } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card 
      component={RouterLink} 
      to={`/product/${product.id}`}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ position: 'relative', pt: '120%' /* Tall image ratio */ }}>
        <CardMedia
          component="img"
          image={product.mainImage}
          alt={product.title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            p: 2, 
            background: 'linear-gradient(to top, rgba(13, 19, 28, 0.9) 0%, rgba(13, 19, 28, 0) 100%)' 
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'primary.light', mb: 0.5 }}>
            {product.category}
          </Typography>
          <Typography variant="h6" sx={{ color: 'white', mb: 1, lineHeight: 1.2 }}>
            {product.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary', 
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: '0.85rem'
            }}
          >
            {product.shortDescription}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {product.tags.slice(0, 2).map((tag) => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  height: '20px'
                }} 
              />
            ))}
            {product.tags.length > 2 && (
              <Chip 
                label={`+${product.tags.length - 2}`} 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  height: '20px'
                }} 
              />
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
