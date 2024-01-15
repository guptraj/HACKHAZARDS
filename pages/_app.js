import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>HACKHAZARDS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="./logo5.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
