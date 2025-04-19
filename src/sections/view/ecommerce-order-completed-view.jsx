'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'next/navigation';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceOrderCompletedView() {

  const searchParams = useSearchParams();

  const total = parseFloat(searchParams.get('total') || '0');
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const quantity = parseInt(searchParams.get('quantity') || '1');
  const price = parseFloat(searchParams.get('price') || '0');

  useEffect(() => {
    if (typeof window.fbq !== 'undefined' && id && name) {
      window.fbq('track', 'Purchase', {
        value: total,
        currency: 'CFA',
        content_ids: [id],
        content_type: 'product',
        content_name: name,
        num_items: quantity,
        contents: [
          {
            id,
            quantity,
            item_price: price,
          },
        ],
      });
    }
  }, [total, id, name, quantity, price]);

  return (
    <Container
      sx={{
        textAlign: 'center',
        py: { xs: 2, md: 2 },
      }}
    >
      <Box sx={{ my: 5 }}>

        <Typography variant="h3" sx={{ mb: 2 }}>
          Merci pour votre commande chez Valcene&nbsp; 🎉
        </Typography>



        <Typography sx={{ mb: 3 }}>
          ✅ <strong>Votre commande a bien été enregistrée.</strong>
          <br />
          Notre équipe vous remercie pour votre confiance.
          <br />
          Un de nos conseillers vous appellera très prochainement pour confirmer les détails
          de votre commande.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          📦 <strong>Prochaine étape&nbsp;:</strong>
        </Typography>
        <Typography component="ul" sx={{ textAlign: 'left', display: 'inline-block', mb: 3 }}>
          <Typography component="li">Appel de confirmation dans les prochaines heures.</Typography>
          <Typography component="li">
            Une fois confirmée, votre commande sera préparée avec soin.
          </Typography>
          <Typography component="li">
            Livraison à votre porte&nbsp;– paiement à la réception.
          </Typography>
        </Typography>

        <Typography sx={{ mb: 2 }}>
          🕒 <strong>Délais estimés&nbsp;:</strong>
          <br />• 📞 Confirmation&nbsp;: sous&nbsp;24&nbsp;h
          <br />• 🚚 Livraison&nbsp;: 1 – 2&nbsp;jours ouvrables
        </Typography>

        <Typography sx={{ mb: 3 }}>
          📞 <strong>Besoin d’aide&nbsp;?</strong>
          <br />
          Service client&nbsp;: tous les jours de&nbsp;9 h à&nbsp;19 h.
          <br />
          📱 WhatsApp&nbsp;: +212&nbsp;629‑249926
        </Typography>

        <Typography sx={{ mb: 5 }}>Encore merci et à très vite 👞</Typography>
      </Box>

      <Button
        component={RouterLink}
        href={paths.eCommerce.products}
        size="large"
        color="primary"
        variant="contained"
        startIcon={<Iconify icon="solar:alt-arrow-left-outline" />}
      >
        Continuer vos achats
      </Button>
    </Container>
  );
}
