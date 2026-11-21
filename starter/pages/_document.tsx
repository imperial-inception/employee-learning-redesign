import { Head, Html, Main, NextScript, type DocumentContext, type DocumentProps } from 'next/document';
import { DocumentHeadTags, documentGetInitialProps, type DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import { themeInitScript } from '@/lib/theme';

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        {/* Sets data-theme before first paint: no flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preload" href="/fonts/Geist-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GeistMono-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* MUI / Emotion SSR styles (only needed because the app also renders MUI components). */}
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => documentGetInitialProps(ctx);
