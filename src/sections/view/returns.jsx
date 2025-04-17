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

    Le retour ou l'échange de produit est un droit pour tous nos clients, et s'applique à tous les produits que nous proposons dans notre magasin.

    </p>
    <p style="font-size: 1.1rem;">
    Tous les produits exposés dans notre magasin sont soumis à une politique de remplacement et de remboursement conformément aux termes et conditions mentionnés sur cette page.

    </p>
    <p style="font-size: 1.1rem;">
    Les retours ou échanges peuvent être effectués si le produit est dans son état d'origine au moment de l'achat et emballé dans son emballage d'origine.
    Les retours sont acceptés dans un délai de trois (3) jours et les échanges dans un délai de sept (7) jours à compter de la date d'achat.

    </p>
    <p style="font-size: 1.1rem;">


     Veuillez nous contacter via la page "Contactez-nous" ou par nos numéros de téléphone pour demander un retour ou un échange.
      Veuillez prendre une photo et envoyer le produit avec la ville, l'adresse et le numéro de commande spécifié afin qu'il soit remplacé par un autre produit en cas de dommage ou de défaut spécifique, ou s'il n'a pas été utilisé conformément à l'accord.

    </p>
    <p style="font-size: 1.1rem;">
      Le montant total sera remboursé au client si le produit qu'il a reçu est complètement différent de celui affiché sur notre site web.
      Nous ne sommes pas responsables des attentes d'utilisation des produits par le client, qui n'ont pas été mentionnées sur la page du produit sur notre site web.



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
