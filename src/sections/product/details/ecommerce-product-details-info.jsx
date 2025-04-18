'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// Assuming Iconify is correctly imported elsewhere if needed
// import { Iconify } from 'src/components/iconify';
import { ProductPrice } from '../../components/product-price';
import { ButtonGroup } from '@mui/material';
import { ProductRating } from '../../components/product-rating';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for loading indicator

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
 // State for selected options - Set defaults matching options
 const [color, setColor] = useState(COLOR_OPTIONS[0]?.value || ''); // Default to first color value
 const [size, setSize] = useState(SIZE_OPTIONS[0]?.value || '');   // Default to first size value
 const [quantity, setQuantity] = useState(1);

 // --- NEW STATE ---
 const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
 // State for validation errors (optional but good for UI feedback)
 const [errors, setErrors] = useState({ fullName: false, phone: false, general: '' });

 const router = useRouter();

 const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));
 const handleIncrement = () => setQuantity((q) => q + 1);

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData(prev => ({ ...prev, [name]: value }));
   // Clear error when user starts typing in a field
   if (errors[name]) {
       setErrors(prev => ({ ...prev, [name]: false, general: '' }));
   }
 };

 const handleSubmit = async () => {
   // --- VALIDATION START ---
   let formIsValid = true;
   const newErrors = { fullName: false, phone: false, general: '' };

   // Trim values to check for whitespace-only input
   const trimmedFullName = formData.fullName.trim();
   const trimmedPhone = formData.phone.trim();

   if (!trimmedFullName) {
     newErrors.fullName = true;
     formIsValid = false;
   }
   if (!trimmedPhone) {
     newErrors.phone = true;
     formIsValid = false;
   }
   if (!size || !color) {
       // Handle missing size/color selection more explicitly
       newErrors.general = 'Veuillez sélectionner une taille et une couleur.';
       console.error(newErrors.general);
       formIsValid = false;
   }

   setErrors(newErrors); // Update error state

   if (!formIsValid) {
     console.error('Validation failed. Please check the form.');
     // Optionally show a general error message to the user (e.g., using a Snackbar)
     return; // Stop submission if validation fails
   }
   // --- VALIDATION END ---


   // --- Set submitting state ---
   setIsSubmitting(true);
   setErrors(prev => ({ ...prev, general: '' })); // Clear general error on successful validation


   // Construct the complete order data object
   const orderData = {
     ...formData, // Includes fullName, phone, city
     quantity: quantity,
     productId: product?.id,
     productName: product?.name,
     productPrice: product?.price.prixApres,
     productCategory: product?.category,
     size: size,
     color: color,
     totalPrice: quantity * product?.price.prixApres,
   };

   console.log('Submitting Order Data:', orderData);

   try {
     const response = await fetch('/api/store-form', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(orderData)
     });

     const result = await response.json();

     if (response.ok) {
       console.log('Data stored successfully:', result.message);
       router.push('/order-completed');
       // No need to reset form fields or setIsSubmitting(false) here because of redirection
     } else {
       console.error('Error storing data:', result.message);
       // Show error message to the user
       setErrors(prev => ({ ...prev, general: `Erreur lors de l'envoi: ${result.message || 'Veuillez réessayer.'}` }));
       setIsSubmitting(false); // Re-enable button on failed submission
     }
   } catch (error) {
     console.error('Fetch error:', error);
     // Show generic error message
     setErrors(prev => ({ ...prev, general: `Une erreur réseau est survenue: ${error.message || 'Veuillez vérifier votre connexion.'}` }));
     setIsSubmitting(false); // Re-enable button on fetch error
   }
   // --- FINALLY block removed as redirection handles the success case ---
   // If not redirecting on success, you would need a finally block:
   // finally {
   //   setIsSubmitting(false); // Ensure button is re-enabled
   // }
 };


 // Make sure product exists before rendering details dependent on it
 if (!product) {
     return <Box sx={sx} {...other}><Typography>Chargement des détails du produit...</Typography></Box>;
 }

 return (
   <Box sx={sx} {...other}>
     {/* Product Info */}
     <Stack spacing={1} sx={{ mb: 4 }}>
       <Typography variant="h3">{product.name}</Typography>
       <ProductRating value={product.rating || "5"} label={product.reviews || "34"} />
     </Stack>

     {/* Price */}
     {product.price && (
       <ProductPrice
         price={product.price.prixApres}
         priceSale={product.price.prixAvant}
         sx={{ typography: 'h4' }}
       />
     )}

     {/* Options */}
     <ProductOptionPicker
       color={color}
       size={size}
       onSelectColor={(newValue) => setColor(newValue)}
       onSelectSize={(newValue) => setSize(newValue)}
       options={{
         colors: COLOR_OPTIONS,
         size: SIZE_OPTIONS,
       }}
       sx={{ my: 5 }}
     />

     {/* Order Form */}
     <Stack spacing={3} sx={{ my: 5 }}>
       <Typography variant="body">Pour passer votre commande, veuillez remplir ce formulaire :</Typography>
       {/* Display General Error Message */}
       {errors.general && (
           <Typography color="error" variant="body2" sx={{ mb: 1 }}>
               {errors.general}
           </Typography>
       )}
       <Box
         component="form"
         noValidate // Disable browser validation if using custom state validation
         onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} // Allow form submission via Enter key
         display="grid"
         gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
         rowGap={2.5}
         columnGap={2}
       >
         <TextField
           fullWidth
           required
           name="fullName"
           label="Nom et Prénom"
           variant="outlined"
           value={formData.fullName}
           onChange={handleChange}
           error={errors.fullName} // Show error state
           helperText={errors.fullName ? "Le nom et prénom sont requis." : ""} // Error message

          sx={{
            // Target the border (fieldset element)
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8b8b8c',
              borderWidth: '1px', // Make it bolder
            },
            // Target the input area for padding
            '& .MuiOutlinedInput-input': {
              py: 2.3, // Increase vertical padding (adjust value as needed, 2 = 16px default theme spacing, 3 = 24px, etc.)
            },

             // Optional: Style the border when focused or on error for consistency
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#333', // Keep it dark when focused
            },
             '& .Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red', // Or '#333' if you don't want default error color border
            },
          }}

         />
         <TextField
           fullWidth
           required
           name="phone"
           label="Téléphone"
           variant="outlined"
           value={formData.phone}
           onChange={handleChange}
           type="tel"
           error={errors.phone} // Show error state
           helperText={errors.phone ? "Le numéro de téléphone est requis." : ""} // Error message

           sx={{
            // Target the border (fieldset element)
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8b8b8c',
              borderWidth: '1px', // Make it bolder
            },
            // Target the input area for padding
            '& .MuiOutlinedInput-input': {
              py: 2.3, // Increase vertical padding (adjust value as needed, 2 = 16px default theme spacing, 3 = 24px, etc.)
            },

             // Optional: Style the border when focused or on error for consistency
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#333', // Keep it dark when focused
            },
             '& .Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red', // Or '#333' if you don't want default error color border
            },
          }}

         />
         <TextField
           fullWidth
           name="city"
           label="Ville"
           variant="outlined"
           value={formData.city}
           onChange={handleChange}


           sx={{

            gridColumn: { md: '1 / span 2' },
            // Target the border (fieldset element)
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8b8b8c',
              borderWidth: '1px', // Make it bolder
            },
            // Target the input area for padding
            '& .MuiOutlinedInput-input': {
              py: 2.3, // Increase vertical padding (adjust value as needed, 2 = 16px default theme spacing, 3 = 24px, etc.)
            },

             // Optional: Style the border when focused or on error for consistency
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#333', // Keep it dark when focused
            },
             '& .Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red', // Or '#333' if you don't want default error color border
            },
          }}

           // Add error/helperText for city if needed later
         />
       </Box>
     </Stack>

     {/* Quantity & Submit */}
     <Stack spacing={2} sx={{ my: 5 }}>
         {/* Quantity */}
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
           <Typography variant="subtitle1">Quantité :</Typography>
           <ButtonGroup size="large" variant="outlined"


           sx={{
            '& .MuiButtonGroup-grouped': {
                borderColor: '#DDD',
              },
              // make every label black, including the disabled one
              '& .MuiButton-root': {
                color: 'common.black',
              },
              '& .MuiButton-root.Mui-disabled': {
                color: 'common.black',
              },

          }}

           >
             <Button onClick={handleDecrement} disabled={isSubmitting}>–</Button>
             <Button disabled sx={{ minWidth: '48px !important', px: '12px !important' }}>{quantity}</Button>
             <Button onClick={handleIncrement} disabled={isSubmitting}>+</Button>
           </ButtonGroup>
         </Box>

         {/* Submit Button */}
         <Button
           onClick={handleSubmit}
           disabled={isSubmitting} // Disable button when submitting
           size="large"
           color="primary"
           variant="contained"
           startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null} // Show loading spinner
           sx={{ /* ... sx props ... */
              typography: 'h5',mt:3, py: 3.5, px: 4, width: { xs: '100%', sm: 'auto' }, alignSelf: { xs: 'stretch', sm: 'flex-stretch'}
           }}
         >
           {isSubmitting ? 'Envoi en cours...' : 'Commander maintenant'}
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
