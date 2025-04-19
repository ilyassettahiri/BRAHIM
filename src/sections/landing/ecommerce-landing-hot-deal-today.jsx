import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fAdd } from 'src/utils/format-time';

import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { EcommerceProductItemHot } from '../product/item/ecommerce-product-item-hot';

// ----------------------------------------------------------------------

export function EcommerceLandingHotDealToday({ products, sx, ...other }) {




  const carousel = useCarousel({
    slidesToShow: { xs: 2, sm: 3, md: 4, lg: 4 },
    slidesToScroll: 2,
    slideSpacing: '24px',
  });

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: 5 },
        ...sx,
      }}
      {...other}
    >
      <>
        <Box
          gap={3}
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
          sx={{ mb: { xs: 2, md: 5 } }}
        >
          <Typography variant="h3" sx={{ textAlign: { xs: 'center', md: 'unset' } }}>








          </Typography>



          <Box flexGrow={1} />

          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{
              gap: 1,
              display: { xs: 'none', md: 'inline-flex' },
            }}
          />
        </Box>

        <Carousel carousel={carousel}>
          {products.map((product) => (
            <EcommerceProductItemHot key={product.id} product={product} isHot />
          ))}
        </Carousel>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 8,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'inline-flex', md: 'none' },
          }}
        />
      </>
    </Box>
  );
}
