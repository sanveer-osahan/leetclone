import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>LeetClone</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png"/>
      <meta name="description" content="Web Applcation that is a LeetCode clone"/>
    </Head>
    <Component {...pageProps} />
    </>
  );
}
