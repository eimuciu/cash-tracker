import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './style.css';
import LayoutWrapper from '@/app/components/layoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>cash-tracker</title>
        <meta name="description" content="Finance manager" />
      </Head>
      <LayoutWrapper>
        <div className={inter.className + ' ' + 'h-[100%]'}>
          <Component {...pageProps} />
        </div>
      </LayoutWrapper>
    </>
  );
}
