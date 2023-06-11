import Script from 'next/script';

export const metadata = {
  title: 'HoneyKingdom',
  description: 'Плеер и чат с разных каналов',
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const gaScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname + window.location.search + window.location.hash });
`;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru">
    <body>
      {children}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {gaScript}
      </Script>
    </body>
  </html>
);

export default RootLayout;
