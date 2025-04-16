'use client';


import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export function EcommerceProductDetailsInfo({ sx, name, price, priceSale, ...other }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: ''
  });

  const router = useRouter();

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
        <Button
          onClick={handleSubmit}
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
