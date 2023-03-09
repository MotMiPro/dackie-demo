/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import React, { ReactElement } from 'react';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Duckies</title>
        <meta name="description" content={'duckies'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AppNavbarHeader /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
