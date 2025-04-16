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

export function ReturnsView() {


  const description = `
  <div class="returns-policy" style="font-family: Arial, sans-serif; text-align: center; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem;">
    <h3 style="margin-bottom: 1rem;">Retours & Échanges</h3>
    <p style="font-size: 1.1rem;">
      Chez Valcene, votre satisfaction est notre priorité. Si vous n'êtes pas entièrement satisfait de votre achat, nous vous offrons la possibilité de retourner ou d'échanger votre produit.
    </p>
    <p style="font-size: 1.1rem;">
      Veuillez nous contacter dans les 14 jours suivant la réception de votre commande pour initier la procédure de retour ou d'échange. Les produits doivent être retournés dans leur état d'origine, avec les étiquettes et l'emballage d'origine.
    </p>
    <p style="font-size: 1.1rem;">
      Des frais de retour peuvent s'appliquer selon les conditions de votre achat. Pour toute question ou assistance, n'hésitez pas à contacter notre service client.
    </p>
  </div>
    `;


  return (
    <Container


    >



                  <Markdown
                    content={description}

                  />



    </Container>
  );
}
