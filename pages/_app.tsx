import App from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <SWRConfig
        value={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fetcher: (...args) => fetch(...args).then((res) => res.json()),
        }}
      >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SWRConfig>
    );
  }
}

export default MyApp;
