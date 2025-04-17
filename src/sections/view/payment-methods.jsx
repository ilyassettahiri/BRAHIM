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


    Le <strong>paiement à la livraison </strong>est l'un des modes de paiement disponibles sur notre boutique en ligne. Cela signifie que le client peut sélectionner le produit souhaité, passer sa commande, et choisir de payer à la réception du produit. Le paiement est donc différé jusqu'à ce que le client reçoive sa commande.
    Nous livrerons le produit à l'adresse convenue (ville, quartier, domicile ou autre emplacement), et le client pourra effectuer le paiement à ce moment-là.

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
