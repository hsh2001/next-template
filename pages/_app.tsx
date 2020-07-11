import '../styles/reset.scss';
import Layout from '../components/Layout';

export default ({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: object;
}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
