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

export function ContactView() {


  const description = `

  <div class="contact-container" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem;">
  <h3 style="text-align: center;">Contactez-nous</h3>
  <p>
    Nous serions ravis de répondre à vos questions et préoccupations. N'hésitez pas à nous contacter via l'un des moyens suivants :
  </p>

  <h3>Adresse</h3>
  <p>
    <strong>Valcene SARL</strong><br>
    123 Rue de l'Artisan<br>
    75000 Paris, France
  </p>

  <h3>Téléphone</h3>
  <p>+33 1 23 45 67 89</p>

  <h3>Email</h3>
  <p>
    <a href="mailto:contact@africuir.com" style="color: #1976d2; text-decoration: none;">contact@africuir.com</a>
  </p>

  <h3>Horaires d'ouverture</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li style="margin-bottom: 0.5rem;">
      <strong>Du lundi au vendredi :</strong> 9h00 - 18h00
    </li>
    <li>
      <strong>Le samedi :</strong> 10h00 - 16h00
    </li>
  </ul>


  <p style="text-align: center;">
    Nous nous engageons à vous répondre dans les plus brefs délais.
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
