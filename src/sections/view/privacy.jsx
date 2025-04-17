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

  <h3>Politique de confidentialité</h3>
<p>
  Chez Valcene, nous accordons une importance primordiale à la confidentialité
  de nos clients. Cette politique de confidentialité détaille comment nous
  collectons, utilisons, divulguons et protégeons les informations personnelles
  que vous nous fournissez via notre site&nbsp;web <strong>Valcene.ma</strong>.
  En utilisant notre site, vous consentez aux pratiques décrites dans cette
  politique de confidentialité.
</p>

<h3>Collecte d’informations</h3>
<p>
  Nous collectons des informations personnelles lorsque vous effectuez un achat
  sur notre site, vous inscrivez à notre newsletter, remplissez un formulaire de
  contact ou interagissez avec notre service client. Les informations que nous
  pouvons collecter incluent votre nom, adresse, adresse e‑mail, numéro de
  téléphone et informations de paiement.
</p>

<h3>Utilisation des informations</h3>
<p>
  Les informations que nous collectons peuvent être utilisées pour les objectifs
  suivants :
</p>
<p>
  –&nbsp;Traiter et livrer votre commande.<br>
  –&nbsp;Vous envoyer des informations sur nos produits, offres spéciales et
  promotions.<br>
  –&nbsp;Répondre à vos demandes de renseignements et fournir un service
  client.<br>
  –&nbsp;Améliorer notre site&nbsp;web, nos produits et nos services.
</p>

<h3>Divulgation à des tiers</h3>
<p>
  Nous ne vendons, n’échangeons ni ne transférons vos informations personnelles
  à des tiers, sauf pour les partenaires impliqués dans la livraison de votre
  commande.
</p>

<h3>Sécurité des informations</h3>
<p>
  Nous prenons des mesures de sécurité appropriées pour protéger vos
  informations personnelles contre l’accès non autorisé, la modification ou la
  divulgation. Cependant, aucune méthode de transmission sur Internet ni de
  stockage électronique n’est totalement sécurisée. Nous nous efforçons de
  protéger vos informations, mais nous ne pouvons garantir leur sécurité
  absolue.
</p>

<h3>Cookies</h3>
<p>
  Notre site&nbsp;web utilise des cookies pour améliorer votre expérience de
  navigation. Les cookies sont de petits fichiers transférés sur votre appareil
  pour collecter des informations sur la façon dont vous interagissez avec notre
  site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais
  cela pourrait limiter certaines fonctionnalités de notre site.
</p>

<h3>Vos choix</h3>
<p>
  Vous pouvez vous désabonner de nos communications marketing en suivant les
  instructions de désinscription fournies dans nos e‑mails.
</p>

<h3>Modification de la politique de confidentialité</h3>
<p>
  Nous nous réservons le droit de modifier cette politique de confidentialité à
  tout moment. Toute modification entrera en vigueur dès sa publication sur
  notre site.
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
