import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { _productsCarousel } from 'src/_mock';
import { maxLine, varAlpha, bgGradient } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function EcommerceLandingHero({ sx, ...other }) {
  const theme = useTheme();

  const carousel = useCarousel(
    {
      loop: true,
      duration: 80,
    },
    [Autoplay({ delay: 5000 }), Fade()]
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-2.webp`,
        }),
        overflow: 'hidden',
        position: 'relative',
        ...sx,
      }}
      {...other}
    >


      <Container sx={{ position: 'relative' }}>
        <Carousel carousel={carousel}>
          {_productsCarousel.map((product, index) => (
            <CarouselItem
              key={product.id}
              product={product}
              selected={carousel.dots.selectedIndex === index}
            />
          ))}
        </Carousel>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ transform: 'translateY(-64px)' }}
        >
          <CarouselDotButtons
            variant="rounded"
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{ color: 'primary.main' }}
          />

          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            slotProps={{
              prevBtn: {
                svgIcon: (
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m15 5l-6 7l6 7"
                  />
                ),
              },
              nextBtn: {
                svgIcon: (
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5l6 7l-6 7"
                  />
                ),
              },
            }}
            sx={{ gap: 1, color: 'primary.main' }}
          />
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function CarouselItem({ product, selected }) {
  return (
    <Box
      gap={8}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={(theme) => ({
        py: 15,
        opacity: 0,
        minHeight: 720,
        transition: theme.transitions.create(['opacity'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.complex,
        }),
        ...(selected && { opacity: 1 }),
      })}
    >
      <Box
        sx={{
          maxWidth: 440,
          color: 'common.white',
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >


        <Typography component="h3" variant="h2" sx={{ mb: 2 }}>
          Best Selling Product
        </Typography>

        <Typography variant="body2" sx={{ ...maxLine({ line: 2 }), mb: 5, opacity: 0.72 }}>
        Best Selling Product
        </Typography>

        <Button
          component={RouterLink}
          href={`/products/${product.id}/`}
          size="large"
          color="primary"
          variant="contained"
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" sx={{ ml: -0.5 }} />}
        >
          Shop now
        </Button>
      </Box>

      <Box
        component="img"
        alt={product.name}
        src={product.coverUrl}
        sx={(theme) => ({
          width: 480,
          filter: `drop-shadow(20px 20px 24px ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
        })}
      />
    </Box>
  );
}
