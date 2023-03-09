import { MainImage, ShadowBg } from 'components/common';
import React from 'react';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';

const Benefit = () => {
  return (
    <BenefitWrapper>
      <ShadowBg style={{ right: '-200px', top: '-10%', width: 400, height: 400 }} />
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', maxWidth: 992, marginBottom: 50 }} data-aos="fade-right">
          <MainImage src="images/TEXT_DUCKIE_BENEFIT.png" />
        </div>
        <div>
          <div className="list" data-aos="fade-left">
            {benefitList.map((item, idx: number) => {
              return (
                <div className="item" key={idx}>
                  <div className="img-wrapper" style={{ backgroundColor: item?.color_code }}>
                    <MainImage style={{ width: 275 }} src={item?.src} />
                  </div>
                  <p className="text">{item?.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BenefitWrapper>
  );
};

export default Benefit;

const BenefitWrapper = styled.section`
  padding: 300px 0 100px 0;
  position: relative;
  z-index: 2;
  .list {
    display: flex;
    justify-content: center;
    gap: 25px;
    .item {
      flex: 1;
      max-width: 350px;
      width: 100%;
    }
    .img-wrapper {
      border-radius: 10px;
      text-align: center;
    }
    .text {
      margin-top: 15px;
      text-align: center;
      white-space: pre-wrap;
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 230, 0, 0) 0%, #ffe600 100%);
    z-index: -1;
    opacity: 0.1;
  }
`;

const benefitList = [
  {
    text: 'Receive recognition',
    src: '/images/DUCKIE_5.png',
    color_code: COLORs.PINKY,
  },
  {
    text: 'Showcase your personal value',
    src: '/images/DUCKIE_6.png',
    color_code: COLORs.YELLOW_LESS,
  },
  {
    text: `Receive rewards\n(NFTs, tokens, WL, etc.)`,
    src: '/images/DUCKIE_7.png',
    color_code: COLORs.SKY_LESS,
  },
];
