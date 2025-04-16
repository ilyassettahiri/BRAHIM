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

export function PrivacyView() {


  const description = `
  <div class="privacy-policy" style="font-family: Arial, sans-serif; text-align: center; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem;">
    <h3 style="margin-bottom: 1rem;">Politique de Confidentialité</h3>
    <p style="font-size: 1.1rem;">
      Chez Valcene, nous prenons votre vie privée très au sérieux. Nous nous engageons à protéger vos informations personnelles et à ne les utiliser que pour vous fournir et améliorer nos services.
    </p>
    <p style="font-size: 1.1rem;">
      Vos données ne seront jamais vendues ou partagées avec des tiers sans votre consentement explicite, sauf si la loi l'exige. Nous mettons en place des mesures de sécurité robustes pour assurer la confidentialité et l'intégrité de vos informations.
    </p>
    <p style="font-size: 1.1rem;">
      Pour toute question concernant notre politique de confidentialité, n'hésitez pas à nous contacter. Nous nous engageons à répondre rapidement à vos demandes et à vous fournir toutes les informations nécessaires.
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
