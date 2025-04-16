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

export function AboutView() {


  const description = `
  <div class="about-valcene" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h3>À propos de Valcene</h3>
  <p>
    <strong>Valcene</strong> est une marque française de vêtements en cuir d’exception, alliant élégance, authenticité et savoir-faire artisanal.
    Nos créations sont conçues pour ceux qui recherchent des pièces uniques et intemporelles, réalisées avec une passion pour la qualité et le détail.
  </p>

  <h3>Nos Engagements</h3>
  <ul>
    <li>
      <strong>Qualité Supérieure :</strong>
      <p>
        Chaque vêtement est confectionné à partir des meilleurs cuirs, garantissant une texture unique et une durabilité remarquable.
        Nos artisans travaillent minutieusement pour offrir des finitions parfaites.
      </p>
    </li>
    <li>
      <strong>Créativité et Style :</strong>
      <p>
        Nous marions tradition et innovation pour créer des pièces modernes et élégantes qui se démarquent, tout en respectant un héritage artisanal.
      </p>
    </li>
    <li>
      <strong>Durabilité et Éthique :</strong>
      <p>
        Nos produits sont pensés pour durer. En privilégiant une production responsable, nous nous engageons pour un luxe durable qui respecte notre environnement et valorise le savoir-faire local.
      </p>
    </li>
  </ul>

  <h3>Découvrez Nos Collections</h3>
  <p>
    Explorez notre gamme de vestes, pantalons et accessoires en cuir, conçue pour sublimer votre style et vous offrir une élégance intemporelle.
    Rejoignez-nous pour vivre l’expérience Valcene – la quintessence du chic en cuir à la française.
  </p>

  <hr />

  <p>
    <strong>Valcene</strong> – L’art du cuir, réinventé.
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
