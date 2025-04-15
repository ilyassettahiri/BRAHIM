import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { Field } from 'src/components/hook-form';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

import { ProductPrice } from '../../components/product-price';
import { ProductOptionPicker } from '../../components/product-option-picker';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

export function EcommerceProductDetailsInfo({
  sx,
  name,
  price,
  caption,
  priceSale,
  ratingNumber,
  totalReviews,
  ...other
}) {
  const [color, setColor] = useState('red');
  const [memory, setMemory] = useState('128gb');
  const [quantity, setQuantity] = useState('1');

  return (
    <Box sx={sx} {...other}>


      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {name} </Typography>


      </Stack>

      <Stack spacing={2}>
        <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h5' }} />

      </Stack>

      {/* <ProductOptionPicker
        color={color}
        memory={memory}
        onSelectColor={(newValue) => setColor(newValue)}
        onSelectMemory={(newValue) => setMemory(newValue)}
        options={{
          colors: COLOR_OPTIONS,
          memory: MEMORY_OPTIONS,
        }}
        sx={{ my: 5 }}
      /> */}









      <Stack spacing={2}>

          <Button
            component={RouterLink}
            href={paths.eCommerce.product}
            size="large"
            color="primary"
            variant="contained"
            sx={{ width: { xs: 1, sm: 'auto' } }}
          >
            commander maintenant
          </Button>

      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />


    </Box>
  );
}
