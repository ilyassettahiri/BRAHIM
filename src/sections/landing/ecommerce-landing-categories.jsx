'use client';

import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// -------------------------------------------------------------

// returns /assets/background/chaussures.webp   etc.
const iconPath = (file) => `/assets/background/${file}`;

const CATEGORIES = [
  { label: 'Chaussures Classiques', icon: iconPath('chaussures.webp'), path: '/chaussures' },
  { label: 'Bottines',               icon: iconPath('bottines.webp'),   path: '/bottines' },
  { label: 'Baskets et Espadrilles', icon: iconPath('baskets.webp'),    path: '/baskets' },
  { label: 'Mocassins',              icon: iconPath('mocassins.webp'),  path: '/mocassins' },
  { label: 'Sandales',               icon: iconPath('sandales.webp'),   path: '/sandales' },
  { label: 'Accessoires',            icon: iconPath('accessoires.webp'),path: '/accessoires' },
  { label: 'Femmes',                 icon: iconPath('femmes.webp'),     path: '/femmes' },
  { label: 'Best Seller',                 icon: iconPath('baskets.webp'),     path: '/products' },

];

// -------------------------------------------------------------

export function EcommerceLandingCategories({ sx, ...other }) {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 }, ...sx }} {...other}>
      <>
        <Typography
          variant="h3"
          sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'unset' } }}
        >
          Nouvelle&nbsp;Collection
        </Typography>

        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {CATEGORIES.map((cat) => (
            <Paper
              key={cat.label}
              component={NextLink}
              href={cat.path}
              variant="outlined"
              sx={{
                textDecoration: 'none',
                px: 1,
                py: 3,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer',
                bgcolor: 'transparent',
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <Box sx={{ mb: 2, p: 1.5, borderRadius: '50%', bgcolor: 'background.neutral' }}>
                <Box
                  component="img"
                  loading="lazy"
                  alt={cat.label}
                  src={cat.icon}
                  sx={{ width: 100, height: 100, borderRadius: '50%' }}
                />
              </Box>

              <Typography variant="subtitle2" noWrap textAlign="center">
                {cat.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </>
    </Box>
  );
}
