'use client';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/routes/components';
import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';




import { Main } from './main';

import { NavMobile } from './nav/mobile';
import { HomeFooter } from './home-footer';
import { NavDesktop } from './nav/desktop';
import { navData } from '../config-nav-main';
import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';

// ----------------------------------------------------------------------

export function MainLayout({ sx, children, header }) {
  const theme = useTheme();

  const pathname = usePathname();

  const openMobileNav = useBoolean();

  const homePage = pathname === '/';

  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          sx={header?.sx}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
                {/* -- Menu button -- */}
                <MenuButton
                  onClick={openMobileNav.onTrue}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={openMobileNav.value}
                  onClose={openMobileNav.onFalse}
                />


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
                          height: 60,
                          width: 'auto',
                          display: { xs: 'block', md: 'block' },
                        }}
                      />
                </Link>
              </>
            ),
            centerArea: (
              <NavDesktop
                data={navData}
                sx={{
                  display: 'none',
                  [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
                }}
              />
            ),
            rightArea: (
              <Box gap={{ [layoutQuery]: 1 }} display="flex" alignItems="center">
                {/* -- Searchbar -- */}
                <Searchbar />

              </Box>
            ),
          }}
        />
      }

      footerSection={<HomeFooter /> }

      sx={sx}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
