import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Greatness — Summer 2026</title>
        <meta name="description" content="Greatness — Effortless pieces for sunlit days and warm nights." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
