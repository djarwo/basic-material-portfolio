import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from 'lib/gtag';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="nightwind">
        <Head>
          {/* Title Tag */}
          <title>Djarwo Prasojo | Software Engineer Portfolio</title>

          {/* Favicon & Manifest */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="https://www.djarwoprasojo.com" />
          <meta name="theme-color" content="#000000" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://www.djarwoprasojo.com/" />

          {/* Meta Tags */}
          <meta name="title" content="Djarwo Prasojo | Software Engineer Portfolio" key="title" />
          <meta
            name="description"
            key="description"
            content="Explore Djarwo Prasojo projects, skills, and experience in web development, backend systems, and modern frontend frameworks."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content="https://www.djarwoprasojo.com/" />
          <meta property="og:title" key="ogtitle" content="Djarwo Prasojo | Software Engineer Portfolio" />
          <meta
            property="og:description"
            key="ogdescription"
            content="Explore Djarwo Prasojo projects, skills, and experience in web development, backend systems, and modern frontend frameworks."
          />
          <meta
            property="og:image"
            key="ogimage"
            content="https://www.djarwoprasojo.com/assets/img/git-banner.png"
          />

          {/* Twitter Meta Tags */}
          <meta property="twitter:card" key="twittercard" content="summary_large_image" />
          <meta property="twitter:url" key="twitterurl" content="https://www.djarwoprasojo.com/" />
          <meta
            property="twitter:title"
            key="twittertitle"
            content="Djarwo Prasojo | Software Engineer Portfolio"
          />
          <meta
            property="twitter:description"
            key="twitterdesc"
            content="Explore Djarwo Prasojo projects, skills, and experience in web development, backend systems, and modern frontend frameworks."
          />
          <meta
            property="twitter:image"
            key="twitterimage"
            content="https://www.djarwoprasojo.com/assets/img/git-banner.png"
          />

          {/* Structured Data (JSON-LD Schema) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Djarwo Prasojo",
                "url": "https://www.djarwoprasojo.com/",
                "sameAs": [
                  "https://linkedin.com/in/djarwo-prasojo",
                  "https://github.com/djarwo"
                ],
                "jobTitle": "Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Your Company"
                }
              }),
            }}
          />

          {/* Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
