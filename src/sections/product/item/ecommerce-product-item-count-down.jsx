import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fAdd } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';


// ----------------------------------------------------------------------

export function EcommerceProductItemCountDown({ product, sx, ...other }) {
  return (
    <Box
      component={RouterLink}
      href={`/products/${product.id}/`}
      sx={{
        p: 3,
        minWidth: 0,
        borderRadius: 2,
        color: '#000',
        bgcolor: '#f4f4f4',
        transition: (theme) =>
          theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
        '&:hover': { bgcolor: '#ddd' },
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt={product.name}

        src={product.coverUrl}
        sx={(theme) => ({
          aspectRatio: '1/1',
          objectFit: 'cover',
        })}
      />

      <Box display="flex" flexDirection="column" sx={{ my: 3, textAlign: 'center' }}>
        <Link
          component={RouterLink}
          href={`/products/${product.id}/`}
          color="inherit"
          underline="none"
          variant="h5"
          noWrap
          sx={{ mb: 1, opacity: 0.72 }}
        >
          {product.name}
        </Link>

        <Typography variant="body">{`À partir de ${product.price.prixApres} CFA`}</Typography>
      </Box>


    </Box>
  );
}
