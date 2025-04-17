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

export function TermsView() {


  const description = `
  <div class="terms-policy" style="font-family: Arial, sans-serif; text-align: center; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem;">
    <h3 style="margin-bottom: 1rem;">Termes et Politiques</h3>
    <p style="font-size: 1.1rem;">
      En utilisant le site de AfriCuir, vous acceptez d'être lié par les présentes conditions d'utilisation. Nous vous invitons à lire attentivement ces termes avant de poursuivre votre navigation.
    </p>

    <h3 style="margin-top: 1.5rem;">Utilisation du Site</h3>
    <p style="font-size: 1.1rem;">
      Vous êtes autorisé à utiliser le site uniquement pour vos besoins personnels et non commerciaux. Toute utilisation abusive ou illégale des services peut entraîner la résiliation de votre accès.
    </p>

    <h3 style="margin-top: 1.5rem;">Modification des Termes</h3>
    <p style="font-size: 1.1rem;">
      AfriCuir se réserve le droit de modifier ces termes à tout moment. Les modifications prendront effet dès leur publication sur le site. Il est recommandé de consulter régulièrement cette page pour rester informé des éventuelles mises à jour.
    </p>

    <h3 style="margin-top: 1.5rem;">Responsabilités</h3>
    <p style="font-size: 1.1rem;">
      Nous nous engageons à maintenir un service de qualité, mais ne pouvons garantir une disponibilité ou une performance à 100 %. AfriCuir décline toute responsabilité en cas de dommages résultant de l'utilisation du site.
    </p>

    <h3 style="margin-top: 1.5rem;">Données Personnelles</h3>
    <p style="font-size: 1.1rem;">
      Veuillez consulter notre <a href="/privacy" style="color: #1976d2; text-decoration: none;">Politique de Confidentialité</a> pour plus d'informations sur la manière dont nous recueillons et utilisons vos données personnelles.
    </p>

    <p style="font-size: 1.1rem; margin-top: 2rem;">
      En continuant à utiliser notre site, vous reconnaissez avoir lu, compris et accepté ces termes.
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
