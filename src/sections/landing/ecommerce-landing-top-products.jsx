import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemHot } from '../product/item/ecommerce-product-item-hot';

// ----------------------------------------------------------------------

export function EcommerceLandingTopProducts({ largeProducts, smallProducts, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        ...sx,
      }}
      {...other}
    >
      <>
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 5, md: 8 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          Top products
        </Typography>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ mb: { xs: 3, md: 8 } }}
        >
          {smallProducts.map((product) => (
            <EcommerceProductItemHot key={product.id} product={product} />
          ))}
        </Box>


      </>
    </Box>
  );
}
