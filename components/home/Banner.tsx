/* eslint-disable react/no-unescaped-entities */
import { DuckieMini, MainImage } from 'components/common';
import AppNavbarHeader from 'components/Header';
import { useListenMobileScreen } from 'hooks/useListenMobileView';
import React from 'react';
import styled from 'styled-components';

const duckieGif = 'images/DUCKIE_GIF.gif';

const Banner = () => {
  const isMobile = useListenMobileScreen(768);

  return (
    <BannerWrapper id="home">
      <AppNavbarHeader />
      <DuckieMini>
        <div className="main">
          <MainImage style={{ maxWidth: 75 }} src="images/DUCKIE_1_ROTATE.png" />
        </div>
      </DuckieMini>
      <DuckieMini style={{ right: 50, left: 'unset', top: '-15%' }}>
        <div className="main" />
      </DuckieMini>
      <div className="container wapper">
        <div className="content flex-1">
          <div className="dackity-welcome" data-aos="fade-right">
            <MainImage src="images/TEXT_DUCKITY.png" />
          </div>
          <div className="to-the-moon">
            <div
              className="flex-to-the-moon"
              style={{
                display: 'flex',
                gap: 5,
                alignItems: 'center',
                fontSize: 14,
              }}
            >
              <span>Build on</span>
              <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                <MainImage style={{ maxWidth: 65 }} src="images/DUCKIE_15.png" />
                <MainImage style={{ maxWidth: 65 }} src="images/DUCKIE_14.png" />
              </div>
            </div>
          </div>
          <p className="duck-class">
            Dackie is a dope meme digital arts that represents the chilled-out, don't-give-a-f*ck attitude of a lazy
            duck. With its lazy-ass eyes and smirking mouth, Dackie is a symbol of apathy and laziness in modern life.
          </p>
        </div>
        <div className="img-gif flex-1">
          <div data-aos="fade-left" className="wrapp-on-hover">
            <MainImage style={{ maxWidth: isMobile ? 300 : '100%' }} src={duckieGif} />
            <div className="chat-box">
              <div data-aos="fade-right">
                <MainImage src="images/CHATBOX.png" style={{ maxWidth: 100 }} />
              </div>
            </div>
          </div>
        </div>
        <DuckieMini
          style={{
            top: 'unset',
            bottom: 0,
            left: '10%',
            filter: 'blur(0.6px)',
            opacity: '.6',
            transform: 'rotate(75deg)',
          }}
        >
          <div className="main">
            <MainImage style={{ maxWidth: 75 }} src="images/DUCKIE_1_ROTATE.png" />
          </div>
        </DuckieMini>
      </div>
      <DuckieMini
        style={{
          top: 'unset',
          bottom: '40px',
          left: 'unset',
          filter: 'blur(1px)',
          opacity: '.6',
          transform: 'rotate(120deg)',
          right: 0,
        }}
      >
        <div className="main">
          <MainImage style={{ maxWidth: 100 }} src="images/DUCKIE_1_ROTATE.png" />
        </div>
      </DuckieMini>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.section`
  padding-top: 20px;
  position: relative;
  overflow: hidden;
  .wapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 50px;
  }
  .flex-1 {
    flex: 1;
    @media screen and (max-width: 768px) {
      flex: unset;
    }
  }
  h3 {
    font-size: 32px;
  }
  h2 {
    font-size: 42px;
    color: inherit;
  }
  p {
    white-space: pre-wrap;
    /* line-height: 25px;
    font-weight: normal; */
    font-size: 28px;
  }
  .chat-box {
    display: none;
    position: absolute;
    top: 0;
    right: 100px;
    transition: all 0.3s ease-in-out;
  }
  .wrapp-on-hover {
    position: relative;
    cursor: pointer;
    &:hover {
      .chat-box {
        display: flexbox;
      }
    }
  }
  .content {
    position: relative;
  }
  .dackity-welcome {
    max-width: 500px;
    margin-bottom: 20px;
  }
  .to-the-moon {
    position: absolute;
    right: -20%;
    top: 50%;
    .flex-to-the-moon {
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 5px 15px 0 15px;
    .dackity-welcome {
      max-width: 275px;
      margin: 20px auto;
    }
    .to-the-moon {
      position: relative;
      padding: 10px 0;
      z-index: 20;
    }
    p {
      text-align: center;
    }
    .img-gif {
      width: 100%;
    }
  }
`;
