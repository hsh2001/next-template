import Head from 'next/head';

import Reset from '../styles/Reset'; 

import Footer from './Footer';
import Header from './Header';

type LayoutProps = React.PropsWithChildren<Record<string, unknown>>;
var a;
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Hello NEXT!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
