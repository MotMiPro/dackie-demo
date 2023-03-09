import 'styles/globals.scss';
// import 'styles/header.scss';
// import 'styles/home-page.scss';
// import 'styles/responsive.scss';

import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { ConfigProvider } from 'antd';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 20, // offset (in px) from the original trigger point
      once: true, // whether animation should happen only once - while scrolling down
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: true, // disables automatic mutations' detections (advanced)
    });
    return () => AOS.refresh();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFD600',
        },
      }}
    >
      <BGApp>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BGApp>
    </ConfigProvider>
  );
}

export default MyApp;

const BGApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #1d1503;
  background-size: cover;
  overflow: hidden;
  color: whitesmoke;
  position: relative;
  z-index: 2;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;
