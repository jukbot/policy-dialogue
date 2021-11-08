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
          <link rel="icon" type="image/svg+xml" href="/image/favicon/favicon.svg" />
          <link rel="alternate icon" type="image/png" href="/image/favicon/favicon.png" />
          <link rel="mask-icon" href="/image/favicon/favicon.svg" />
          <link rel="apple-touch-icon" href="/image/favicon/favicon.png" />
          {/* Preload api */}
          <link rel="preload" href="https://www.google.com/recaptcha/api.js" as="script" />
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
