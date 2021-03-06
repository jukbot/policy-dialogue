import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="notranslate">
      <Head>
        <meta charSet="utf8" />
        <meta name="fragment" content="!" />
        <meta name="google-site-verification" content="CP2afkl7ksSSL_bXL2bHBcnsI4cVSw6JJ5fFR6l_phA" />
        <link rel="icon" type="image/svg+xml" href="/image/favicon/favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/image/favicon/favicon.png" />
        <link rel="mask-icon" href="/image/favicon/favicon.svg" />
        <link rel="apple-touch-icon" href="/image/favicon/favicon.png" />
        <link rel="preload" href="/fonts/IBMPlexSansThai-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/IBMPlexSansThai-SemiBold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/IBMPlexSansThaiLooped-Bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/IBMPlexSansThaiLooped-SemiBold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/IBMPlexSansThaiLooped-Regular.ttf" as="font" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
