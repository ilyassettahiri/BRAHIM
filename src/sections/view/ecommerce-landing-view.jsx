'use client';

import { _products, _testimonials } from 'src/_mock';

import { EcommerceLandingHero } from '../landing/ecommerce-landing-hero';
import { EcommerceLandingTopProducts } from '../landing/ecommerce-landing-top-products';
import { EcommerceLandingSpecialOffer } from '../landing/ecommerce-landing-special-offer';
import { EcommerceLandingHotDealToday } from '../landing/ecommerce-landing-hot-deal-today';
import { EcommerceLandingFeaturedProducts } from '../landing/ecommerce-landing-featured-products';

// ----------------------------------------------------------------------

export function EcommerceLandingView() {
  return (
    <>
      <EcommerceLandingHero />


      <EcommerceLandingHotDealToday products={_products} />

      <EcommerceLandingFeaturedProducts
        largeProducts={_products.slice(1, 3)}
        smallProducts={_products.slice(4, 8)}
      />

      <EcommerceLandingSpecialOffer />




      <EcommerceLandingTopProducts
        largeProducts={[_products[6], _products[4], _products[10]]}
        smallProducts={_products.slice(4, 8)}
      />


    </>
  );
}
