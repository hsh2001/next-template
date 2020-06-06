import '../styles/reset.scss';

export default ({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: object;
}) => {
  return <Component {...pageProps} />;
};
