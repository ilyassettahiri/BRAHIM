'use client';

import { useState, useCallback, useEffect } from 'react';
import { _products } from 'src/_mock';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { EcommerceLandingHotDealToday } from 'src/sections/landing/ecommerce-landing-hot-deal-today';

import { useBoolean } from 'src/hooks/use-boolean';

import Divider from '@mui/material/Divider';


import { Markdown } from 'src/components/markdown';


import { EcommerceProductDetailsInfo } from '../product/details/ecommerce-product-details-info';
import { EcommerceProductDetailsCarousel } from '../product/details/ecommerce-product-details-carousel';

// ----------------------------------------------------------------------

export function EcommerceProductView({ product }) {

  useEffect(() => {
    console.log('Product:', product);
  }, [product]);


  return (
    <>
      <Container  maxWidth={false} sx={{ overflow: 'hidden',

            paddingLeft: {xs: '10px', lg: '100px' },
            paddingRight: {xs: '10px', lg: '100px' },

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

        <Grid container columnSpacing={{ md: 12 }} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
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

        <Divider sx={{my: 3 }} />

                  <EcommerceLandingHotDealToday products={_products} />


      </Container>


    </>
  );
}
