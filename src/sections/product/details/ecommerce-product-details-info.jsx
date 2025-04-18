'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// Assuming Iconify is correctly imported elsewhere if needed
// import { Iconify } from 'src/components/iconify';
import { ProductPrice } from '../../components/product-price';
import { ButtonGroup } from '@mui/material';
import { ProductRating } from '../../components/product-rating';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ProductOptionPicker } from '../../components/product-option-picker'; // Make sure this path is correct

const COLOR_OPTIONS = [
  { label: '#000000', value: 'noir' },
  { label: '#8B4513', value: 'marron' },
];

const SIZE_OPTIONS = [
  { label: '40', value: '40' },
  { label: '41', value: '41' },
  { label: '42', value: '42' },
  { label: '43', value: '43' },
  { label: '44', value: '44' },
  { label: '45', value: '45' },
];

// --- Main Component ---
export function EcommerceProductDetailsInfo({ sx, product, ...other }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: ''
  });

  // State for selected options
  const [color, setColor] = useState(''); // Initialize with empty or a default value if applicable
  const [size, setSize] = useState('');   // Initialize with empty or a default value if applicable
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();

  const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrement = () => setQuantity((q) => q + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // --- MODIFICATION START ---
    // Construct the complete order data object
    const orderData = {
      ...formData, // Includes fullName, phone, city
      quantity: quantity,
      productId: product?.id, // Use optional chaining in case product is undefined
      productName: product?.name,
      productCategory: product?.category, // Make sure product object has a 'category' property
      size: size,
      color: color,
    };
    // --- MODIFICATION END ---

    // Optional: Add validation here to ensure size and color are selected
    if (!size || !color) {
       console.error('Please select a size and color.');
       // Optionally show an alert or message to the user
       // alert('Veuillez sélectionner une taille et une couleur.');
       return; // Stop the submission
    }

    console.log('Submitting Order Data:', orderData); // For debugging

    try {
      const response = await fetch('/api/store-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // --- MODIFICATION ---
        body: JSON.stringify(orderData) // Send the combined order data
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Data stored successfully:', result.message);
        // Optionally reset the form or display a success notification
        router.push('/order-completed'); // Redirect on success
      } else {
        console.error('Error storing data:', result.message);
        // Optionally show an error message to the user
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Optionally show a generic error message to the user
    }
  };


  // Make sure product exists before rendering details dependent on it
  if (!product) {
      return <Box sx={sx} {...other}><Typography>Loading product details...</Typography></Box>;
  }

  return (
    <Box sx={sx} {...other}>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h3">{product.name}</Typography>
        {/* Ensure ProductRating receives valid props */}
        <ProductRating value={product.rating || "5"} label={product.reviews || "34"} />
      </Stack>

      {/* Ensure product.price exists and has the expected structure */}
      {product.price && (
        <ProductPrice
          price={product.price.prixApres}
          priceSale={product.price.prixAvant}
          sx={{ typography: 'h5' }}
        />
      )}

      {/* Product Options */}
      <ProductOptionPicker
        color={color}
        size={size}
        onSelectColor={(newValue) => setColor(newValue)}
        onSelectSize={(newValue) => setSize(newValue)}
        options={{
          colors: COLOR_OPTIONS, // Use defined constants
          size: SIZE_OPTIONS,   // Use defined constants
        }}
        sx={{ my: 5 }}
      />

      {/* Order Form */}
      <Stack spacing={2} sx={{ my: 5 }}>
        <Typography variant="body1">Pour passer votre commande, veuillez remplir ce formulaire :</Typography>
        <Box
          component="form" // Good practice to wrap form fields in a form tag, though handleSubmit is manual
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          rowGap={2.5}
          columnGap={2}
        >
          <TextField
            fullWidth
            required // Add required attribute if needed
            name="fullName"
            label="Nom et Prénom"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            required // Add required attribute if needed
            name="phone"
            label="Téléphone"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            type="tel" // Use type="tel" for phone numbers
          />
          <TextField
            fullWidth
            required // Add required attribute if needed
            name="city"
            label="Ville"
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
            sx={{ gridColumn: { md: '1 / span 2' } }}
          />
        </Box>
      </Stack>

      {/* Quantity Selector and Submit Button */}
      <Stack spacing={3} sx={{ my: 5 }}> {/* Increased spacing */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Vertically align items
              gap: 2, // Add gap between label and button group
            }}
          >
            <Typography variant="subtitle2">Quantité :</Typography>
            <ButtonGroup
              size="large"
              variant="outlined"
              aria-label="quantity selector"
              sx={{
                '& .MuiButtonGroup-grouped': {
                    borderColor: (theme) => theme.palette.divider, // Use theme variable
                  },
                '& .MuiButton-root': {
                  color: 'text.primary', // Use theme variable
                },
                '& .MuiButton-root.Mui-disabled': {
                  color: 'text.disabled', // Use theme variable for disabled state
                  borderColor: (theme) => theme.palette.divider, // Ensure border stays consistent
                },
              }}
            >
              <Button onClick={handleDecrement}>–</Button>
              {/* Ensure the button width is sufficient and text doesn't make it jump */}
              <Button disabled sx={{ minWidth: '48px !important', px: '12px !important' }} >
                {quantity}
              </Button>
              <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
          </Box>

        <Button
          onClick={handleSubmit} // Triggers the modified submit handler
          size="large"
          color="primary"
          variant="contained"
          // Ensure consistent width and prevent layout shift on hover/focus
          sx={{
             typography: 'h5',
             py: 2, // Adjusted padding
             px: 4, // Added horizontal padding
             width: { xs: '100%', sm: 'auto' }, // Full width on xs, auto on sm+
             alignSelf: { xs: 'stretch', sm: 'flex-start'} // Align button correctly
          }}
        >
          Commander maintenant
        </Button>

        {/* Service Info Boxes */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
          gap={2}
          mt={3} // Adjusted margin
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
            <Typography variant="caption" display="block"> {/* Use display block */}
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
            <Typography variant="caption" display="block"> {/* Use display block */}
              Retour et échanges gratuits sous 7&nbsp;jours
            </Typography>
          </Box>
        </Box>

        {/* Sizing Note */}
        <Typography
          variant="caption"
          sx={{ mt: 2, display: 'block', textAlign: 'center', color: 'text.secondary' }}
        >
          TAILLE HABITUELLE&nbsp;: prenez votre taille habituelle, cela convient à&nbsp;95&nbsp;% de nos&nbsp;clients.
        </Typography>

      </Stack>
    </Box>
  );
}
