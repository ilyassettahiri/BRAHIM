'use client';

import { _products } from 'src/_mock';
import Container from '@mui/material/Container';

import { EcommerceLandingHero } from '../landing/ecommerce-landing-hero';
import { EcommerceLandingHotDealToday } from '../landing/ecommerce-landing-hot-deal-today';
import { EcommerceLandingFeaturedProducts } from '../landing/ecommerce-landing-featured-products';
import { EcommerceLandingCategories } from '../landing/ecommerce-landing-categories';

// ----------------------------------------------------------------------

export function EcommerceLandingView() {
  return (
    <>
      <EcommerceLandingHero />

      <Container  maxWidth={false} sx={{ overflow: 'hidden',

            paddingLeft: {xs: '10px', lg: '100px' },
            paddingRight: {xs: '10px', lg: '100px' },

      }}>

          <EcommerceLandingHotDealToday products={_products} />

          <EcommerceLandingFeaturedProducts
            largeProducts={_products.slice(1, 3)}
            smallProducts={_products.slice(4, 8)}
          />




          <EcommerceLandingCategories />

      </Container>

    </>
  );
}
