import 'src/global.css';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { CONFIG } from 'src/config-global';
import { schemeConfig } from 'src/theme/scheme-config';
import { ThemeProvider } from 'src/theme/theme-provider';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
    },
  ],
};

const FB_PIXEL_ID = '1220167745621025';

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          defaultMode={schemeConfig.defaultMode}
          modeStorageKey={schemeConfig.modeStorageKey}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <SettingsProvider settings={defaultSettings}>
          <ThemeProvider>
            <SettingsDrawer />
            {children}
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
