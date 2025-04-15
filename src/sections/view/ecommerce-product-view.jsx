'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';



import { Markdown } from 'src/components/markdown';


import { EcommerceProductDetailsInfo } from '../product/details/ecommerce-product-details-info';
import { EcommerceProductDetailsCarousel } from '../product/details/ecommerce-product-details-carousel';

// ----------------------------------------------------------------------

export function EcommerceProductView({ product }) {




  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>


        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsCarousel images={product?.images || []} />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <EcommerceProductDetailsInfo
              name={product?.name || ''}
              price={product?.price || 0}
              caption={product?.caption || ''}
              priceSale={product?.priceSale || 0}

            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <Markdown
              content={product?.description || ''}
              sx={{
                my: 10,
                '& table': {
                  '& td': { px: 2, typography: 'body2' },
                  '& td:first-of-type': { color: 'text.secondary' },
                  'tbody tr:nth-of-type(odd)': { bgcolor: 'transparent' },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>


    </>
  );
}
