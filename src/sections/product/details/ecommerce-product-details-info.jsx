'use client';


import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { Iconify } from 'src/components/iconify';
import { ProductPrice } from '../../components/product-price';
import { ButtonGroup } from '@mui/material';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ProductOptionPicker } from '../../components/product-option-picker';

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];















const MEMORY_OPTIONS = [
  { label: '39', value: '39' },
  { label: '40', value: '40' },
  { label: '41', value: '41' },
  { label: '42', value: '42' },
  { label: '43', value: '43' },
  { label: '44', value: '44' },
  { label: '45', value: '45' },
];


export function EcommerceProductDetailsInfo({ sx, name, price,id, priceSale, ...other }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: ''
  });

  const [color, setColor] = useState('');
  const [memory, setMemory] = useState('');
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrement = () => setQuantity((q) => q + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/store-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Data stored successfully:', result.message);
        // Optionally reset the form or display a success notification
        router.push('/order-completed');

      } else {
        console.error('Error storing data:', result.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };


  return (
    <Box sx={sx} {...other}>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h3">{name}</Typography>
      </Stack>

      {/* Additional components like ProductPrice */}
      <ProductPrice price={price} priceSale={priceSale} sx={{ typography: 'h5' }} />


      <ProductOptionPicker
        color={color}
        memory={memory}
        onSelectColor={(newValue) => setColor(newValue)}
        onSelectMemory={(newValue) => setMemory(newValue)}
        options={{
          colors: COLOR_OPTIONS,
          memory: MEMORY_OPTIONS,
        }}
        sx={{ my: 5 }}
      />





      <Stack spacing={2} sx={{ my: 5 }}>
        <Typography variant="body">Informations client</Typography>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          rowGap={2.5}
          columnGap={2}
        >
          <TextField
            fullWidth
            name="fullName"
            label="Nom et Prénom"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="phone"
            label="Téléphone"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="city"
            label="Ville"
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
            sx={{ gridColumn: { md: '1 / span 2' } }}
          />
        </Box>
      </Stack>

      <Stack spacing={2} sx={{ my: 5 }}>

          <Box

          sx={{
            display: 'flex',

            mb: 2,         // optional spacing below
          }}
          >
            <ButtonGroup
              size="large"
              variant="outlined"
              aria-label="quantity selector"
              sx={{
                // make all buttons' outlines white
                '& .MuiButtonGroup-grouped': {
                  borderColor: '#DDD',
                  color: 'common.black',
                },
                // ensure the wrapper outline is also white
                '& fieldset': {
                  borderColor: '#DDD',
                },
              }}
            >
              <Button onClick={handleDecrement} >–</Button>
              <Button disabled sx={{ minWidth: 48 }}>
                {quantity}
              </Button>
              <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
          </Box>

        <Button
          onClick={handleSubmit}
          size="large"
          color="primary"
          variant="contained"
          sx={{ typography: 'h5', py: 3.5, width: { xs: 1, sm: 'auto' } }}
        >
          Commander maintenant
        </Button>


        {/* --- service bullets --- */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
          gap={2}
          mt={2}
        >
          <Box
            sx={{
              bgcolor: 'background.neutral',
              p: 2,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold">
              LIVRAISON GRATUITE
            </Typography>
            <Typography variant="caption">
              Livraison gratuite sous 24&nbsp;h
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.neutral',
              p: 2,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold">
              RETOUR&nbsp;ET&nbsp;ÉCHANGES
            </Typography>
            <Typography variant="caption">
              Retour et échanges gratuits sous 7&nbsp;jours
            </Typography>
          </Box>
        </Box>

        {/* --- sizing note --- */}
        <Typography
          variant="caption"
          sx={{ mt: 1, display: 'block', textAlign: 'center', color: 'text.secondary' }}
        >
          TAILLE HABITUELLE&nbsp;: prenez votre taille habituelle, cela convient à&nbsp;95&nbsp;% de nos&nbsp;clients.
        </Typography>

      </Stack>
    </Box>
  );
}
