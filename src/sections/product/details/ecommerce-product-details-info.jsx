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
        <Typography variant="h3"> {name} </Typography>


      </Stack>

      <Stack spacing={2} sx={{ my: 5 }}>
        <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h4',  }} />

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



      <Stack spacing={2} sx={{ my: 5 }}>

             <Typography variant="body"> Informations client             </Typography>
              <Box
                rowGap={2.5}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              >
                    {/* Full Name input */}
                  <TextField
                    fullWidth
                    name="personal.fullName"
                    label="Nom et Prénom"
                    variant="outlined"
                  />

                  {/* Phone input */}
                  <TextField
                    fullWidth
                    name="personal.phone"
                    label="Téléphone"
                    variant="outlined"
                  />

                  {/* City input, spanning two columns on medium screens */}
                  <TextField
                    fullWidth
                    name="personal.city"
                    label="Ville"
                    variant="outlined"
                    sx={{ gridColumn: { md: '1 / span 2' } }}
                  />

                </Box>

      </Stack>





      <Stack spacing={2} sx={{ my: 5 }}>

          <Button
            component={RouterLink}
            href={paths.eCommerce.product}
            size="large"
            color="primary"
            variant="contained"
            sx={{ typography: 'h5', py: 3.5, width: { xs: 1, sm: 'auto' } }}
          >
            commander maintenant
          </Button>

      </Stack>




    </Box>
  );
}
