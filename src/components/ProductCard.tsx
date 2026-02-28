import React from 'react';
import { Card, Typography, Box, Chip } from '@mui/material';
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
        overflow: 'hidden',
        backgroundColor: '#0d131c',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        '&:hover': {
          borderColor: 'primary.main',
        }
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', pt: '125%', backgroundColor: '#1a222c' }}>
        <img
          src={product.mainImage}
          alt={product.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            p: 2, 
            background: 'linear-gradient(to top, rgba(13, 19, 28, 1) 0%, rgba(13, 19, 28, 0.5) 50%, rgba(13, 19, 28, 0) 100%)',
            zIndex: 1
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'primary.light', mb: 0.5, fontWeight: 700 }}>
            {product.category}
          </Typography>
          <Typography variant="h6" sx={{ color: 'white', mb: 1, lineHeight: 1.2, fontWeight: 800 }}>
            {product.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary', 
              mb: 1.5,
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
                  backgroundColor: 'rgba(124, 77, 255, 0.1)', 
                  color: 'primary.light',
                  fontSize: '0.7rem',
                  height: '20px',
                  fontWeight: 600
                }} 
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
