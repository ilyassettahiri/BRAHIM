import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { RouterLink } from 'src/routes/components';
import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';


import { NavUl } from 'src/components/nav-section';
import { Scrollbar } from 'src/components/scrollbar';

import { NavList } from './nav-mobile-list';

// ----------------------------------------------------------------------

export function NavMobile({ data, open, onClose, slots, sx }) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >

        <Box display="flex" sx={{ pt: 3, pb: 2, pl: 2.5 }}>



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
                          src="/assets/background/logo.png"
                          alt="Logo"
                          sx={{
                            height: 60,
                            width: 'auto',

                          }}
                        />

                </Link>

        </Box>


      <Scrollbar fillContent>
        <Box component="nav" display="flex" flexDirection="column" flex="1 1 auto" sx={{ pb: 3 }}>
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </Box>
      </Scrollbar>


    </Drawer>
  );
}
