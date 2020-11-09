import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../redux/store';
import Reset from '../styles/Reset';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = React.PropsWithChildren<Record<string, unknown>>;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <ReduxProvider store={store}>
      <Head>
        <title>Hello NEXT!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <Header />
      <main>{children}</main>
      <Footer />
    </ReduxProvider>
  );
};

export default Layout;
