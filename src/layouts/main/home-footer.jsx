import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';


// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <Box component="footer" sx={{ py: 4, ...sx }} {...other}>

      <Divider  sx={{ my: 3 }}/>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >

                <Link
                  component={RouterLink}
                   href='/'
                  underline="none"
                  sx={{
                    display: { xs: 'block', md: 'block' },
                  }}
                >

                        <Box
                          component="img"
                          src="/assets/background/logo.jpeg"
                          alt="Logo"
                          sx={{
                            height: 80,
                            width: 'auto',
                            display: { xs: 'block', md: 'block' },
                          }}
                        />

                </Link>


         {/* Three columns for informational links */}
         <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            mt: 3,
            width: '100%',

          }}
        >
          {/* Column 1: A propos du magasin */}
          <Box sx={{ flex: 1, minWidth: '200px', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              A propos du magasin
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="/about" color="inherit" variant="body2">
                À propos
              </Link>
              <Link href="/payment-methods" color="inherit" variant="body2">
                Méthodes de payement
              </Link>

              <Link href="/contact" color="inherit" variant="body2">
                Contactez-nous
              </Link>
            </Box>
          </Box>

          {/* Column 2: Contactez-nous */}
          <Box sx={{ flex: 1, minWidth: '200px', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Contactez-nous
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="mailto:contact@valcene.com" color="inherit" variant="body2">
                contact@valcene.com
              </Link>
              <Link href="tel:+33123456789" color="inherit" variant="body2">
                +212 629-249926
              </Link>
              <Link href="/contact" color="inherit" variant="body2">
                Service Client
              </Link>
            </Box>
          </Box>

          {/* Column 3: Aide & Informations Légales */}
          <Box sx={{ flex: 1, minWidth: '200px', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Aide & Informations Légales
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>

              <Link href="/terms" color="inherit" variant="body2">
                Termes et politiques
              </Link>

              <Link href="/returns" color="inherit" variant="body2">
                Retours & échanges
              </Link>
              <Link href="/privacy" color="inherit" variant="body2">
                Politique de Confidentialité
              </Link>
            </Box>
          </Box>
        </Box>

        <Box component="span" sx={{ color: 'text.secondary', typography: 'caption' }}>
          © All rights reserved.
        </Box>




      </Container>
    </Box>
  );
}
