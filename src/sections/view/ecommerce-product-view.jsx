'use client';

import { useState, useCallback, useEffect } from 'react';
import { _products } from 'src/_mock';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { EcommerceLandingHotDealToday } from 'src/sections/landing/ecommerce-landing-hot-deal-today';

import { useBoolean } from 'src/hooks/use-boolean';

import Divider from '@mui/material/Divider';


import { Markdown } from 'src/components/markdown';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { EcommerceProductDetailsInfo } from '../product/details/ecommerce-product-details-info';
import { EcommerceProductDetailsCarousel } from '../product/details/ecommerce-product-details-carousel';

import SvgIcon from '@mui/material/SvgIcon';

function WhatsAppIcon(props) {
  return (
    <SvgIcon viewBox="0 0 448 512" {...props}>
      {/* Font‑Awesome WhatsApp glyph */}
      <path d="M380.9 97.1C339.3 55.5 283.5 32 224.1 32C100.3 32 0 132.4 0 256c0 45.3 11.8 89.4 34.2 127L0 480l100.3-33.2c36.6 19.9 77.8 30.3 123.8 30.3c123.8 0 224.1-100.4 224.1-224.1c0-59.4-23.4-115.3-65.3-157zM337 298.4c-5.6 15.7-31.7 30.2-42.2 32.3c-10.9 2.1-24.5 3.2-66.5-13.2c-61.8-23.9-101.8-83.3-104.7-87.2c-2.9-3.8-24-28.7-24-54.7c0-25.9 13-38.7 17.6-43.9c4.6-5.2 10.3-6.6 14-6.6c3.6 0 7.3 0.1 10.5 0.2c3.3 0.1 7.6-1.3 11.8 9.8c4.2 11.2 14.3 38.7 15.6 41.5c1.3 2.9 2.2 6.5-0.5 10.1c-2.7 3.7-4.1 5.9-7.4 9.1c-3.3 3.2-6.6 6.7-9.7 10.2c-3.2 3.5-6.5 7.3-4.2 14.2c2.3 6.9 10.2 23.2 21.8 37.4c15.3 18 28.1 23.8 33.6 26.3c5.4 2.5 11.4 2.1 15.7 1.2c4.4-0.9 37.6-15.1 44.1-16.8c6.4-1.7 10.1-2.5 11.6-3.9c1.6-1.4 10.2-5 19.3-9.8c9.1-4.8 34.9-17 40.6-21.2c5.7-4.1 9.5-9.1 10.6-11.2c1.1-2.1 1.1-3.9 0.7-5.4C351.5 286.8 342.6 290 337 298.4z" />
    </SvgIcon>
  );
}

// ----------------------------------------------------------------------

export function EcommerceProductView({ product }) {

  useEffect(() => {
    console.log('Product:', product);
  }, [product]);


  const whatsappNumber = '212629249926';          // no + or spaces
  const productUrl     = `https://valcene.com/products/${product.id}/`;
  const waText         = `Bonjour, je suis intéressé par l'achat de ${product.name} ${productUrl}`;
  const waLink         = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;


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
              product={product}




            />
          </Grid>


        </Grid>

        <Divider sx={{my: 3 }} />

        <Grid container justifyContent="center" >
          <Grid xs={12} md={12} lg={8}>
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

      <Fab
        component="a"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        color="success"
        sx={{
          position: 'fixed',
          bottom: 24,
          right:   24,
          zIndex: 1300,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </Fab>

    </>
  );
}
