import Layout from '../components/Layout';
import ResetCSS from '../styles/Reset';

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
      <ResetCSS />
    </Layout>
  );
};
