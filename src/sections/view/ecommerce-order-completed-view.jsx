'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceOrderCompletedView() {
  return (
    <Container

      sx={{
        textAlign: 'center',
        py: { xs: 10, md: 15 },
      }}
    >


      <Box sx={{ my: 5 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Your order is complete!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          You will be receiving a confirmation email with order details.
        </Typography>
      </Box>

      <Button
        component={RouterLink}
        href={paths.eCommerce.products}
        size="large"
        color="inherit"
        variant="contained"
        startIcon={<Iconify icon="solar:alt-arrow-left-outline" />}
      >
        Continue shopping
      </Button>
    </Container>
  );
}
