import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html className="notranslate">
        <Head>
          <meta charSet="utf8" />
          <meta name="description" content="นโยบายที่ดี สังคมต้องร่วมกันออกแบบ" />
          <meta name="google-site-verification" content="CP2afkl7ksSSL_bXL2bHBcnsI4cVSw6JJ5fFR6l_phA" />
          <link rel="icon" type="image/svg+xml" href="/image/favicon/favicon.svg" />
          <link rel="alternate icon" type="image/png" href="/image/favicon/favicon.png" />
          <link rel="mask-icon" href="/image/favicon/favicon.svg" />
          <link rel="apple-touch-icon" href="/image/favicon/favicon.png" />
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
}

export default MyDocument
