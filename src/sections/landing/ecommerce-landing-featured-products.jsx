import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { EcommerceProductItemCountDown } from '../product/item/ecommerce-product-item-count-down';

// ----------------------------------------------------------------------

export function EcommerceLandingFeaturedProducts({ sx, largeProducts, smallProducts, ...other }) {
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
          Nos Bestsellers

        </Typography>

        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12} lg={12}>
            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
            >
              {largeProducts?.map((product, index) => (
                <EcommerceProductItemCountDown
                  key={product.id}
                  product={product}
                  sx={{
                    ...(index === 1 && {

                    }),
                  }}
                />
              ))}
            </Box>
          </Grid>


        </Grid>
      </>
    </Box>
  );
}
