import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import ResetCSS from '../styles/Reset';

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Hello NEXT!</title>
        <link rel="icon" href="/favicon.ico" />
        <ResetCSS />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
