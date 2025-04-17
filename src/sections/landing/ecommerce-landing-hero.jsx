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
          color: `to bottom,
          ${varAlpha(theme.vars.palette.common.whiteChannel, 0.1)},
          ${varAlpha(theme.vars.palette.common.blackChannel, 0.15)}`,        }),
        overflow: 'hidden',
        position: 'relative',
        ...sx,
      }}
      {...other}
    >


      <Container maxWidth={false} sx={{ position: 'relative',

            paddingLeft: {xs: '10px', lg: '100px' },
            paddingRight: {xs: '10px', lg: '100px' },

      }}>
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



        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function CarouselItem({ product, selected }) {
  return (
    <Box

      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={(theme) => ({

        opacity: 0,
        minHeight: 420,

        transition: theme.transitions.create(['opacity'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.complex,
        }),
        ...(selected && { opacity: 1 }),
      })}
    >
      <Box
        sx={{
          maxWidth: 800,
          color: 'common.white',
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >


        <Typography component="h3" variant="h2" sx={{ mb: 2, color: 'black' }}>
          Valcene votre signature
        </Typography>

        <Typography component="h3" variant="h2" sx={{ mb: 2, color: 'black' }}>
           d’élégance
        </Typography>

        <Button
          component={RouterLink}
          href={`/products`}
          size="large"
          color="primary"
          variant="contained"
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" sx={{ ml: -0.5 }} />}
        >
          Découvrir
        </Button>
      </Box>

      <Box
        component="img"
        alt={product.name}
        src={product.coverUrl}
        sx={(theme) => ({
          width: 500,
        })}
      />
    </Box>
  );
}
