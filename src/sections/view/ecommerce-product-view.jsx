'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import Divider from '@mui/material/Divider';


import { Markdown } from 'src/components/markdown';


import { EcommerceProductDetailsInfo } from '../product/details/ecommerce-product-details-info';
import { EcommerceProductDetailsCarousel } from '../product/details/ecommerce-product-details-carousel';

// ----------------------------------------------------------------------

export function EcommerceProductView({ product }) {




  return (
    <>
      <Container  maxWidth={false} sx={{ overflow: 'hidden',

            paddingLeft: {xs: '15px', lg: '200px' },
            paddingRight: {xs: '15px', lg: '200px' },

            mt: {xs: 1, lg: 2 },
      }}>


        <Grid container spacing={{ xs: 5, md: 5 }}>
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

        <Divider sx={{my: 3 }} />

        <Grid container columnSpacing={{ md: 12 }}>
          <Grid xs={12} md={12} lg={12}>
            <Markdown
              content={product?.description || ''}
              sx={{
                mt: 1,
                '& table': {
                  '& td': { px: 1, typography: 'body2' },
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
