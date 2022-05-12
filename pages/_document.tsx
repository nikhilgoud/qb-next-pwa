import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';

export class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="apple-mobile-web-app-title" content="Question Bank" />
          <meta name="application-name" content="Question Bank" />
          <meta name="theme-color" content="#ffffff" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' 
                    || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
            }}
          />
        </Head>
        <body
          className={`antialiased text-slate-500 dark:text-slate-400 ${
            !this.props.dangerousAsPath.startsWith('/examples/') ? 'bg-white dark:bg-slate-900' : ''
          }`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default CustomDocument;
