'use client';

import { m } from 'framer-motion';
import { Markdown } from 'src/components/markdown';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function PaymentmethodsView() {


  const description = `
<div class="payment-methods" style="font-family: Arial, sans-serif; text-align: center; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem;">
  <h3 style="margin-bottom: 1rem;">Méthodes de paiement</h3>
  <p style="font-size: 1.1rem;">
    Chez Valcene, nous acceptons uniquement le paiement à la livraison (contre remboursement). Cela vous permet de recevoir votre commande et de payer directement lors de sa livraison.
  </p>
</div>
`;


  return (
    <Container

      sx={{
        textAlign: 'center',

      }}
    >



            <Markdown
              content={description}

            />



    </Container>
  );
}
