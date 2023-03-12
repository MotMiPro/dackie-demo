import { MainImage, ShadowBg } from 'components/common';
import { useListenMobileScreen } from 'hooks/useListenMobileView';
import React from 'react';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';

const Benefit = () => {
  const isMobile = useListenMobileScreen(768);

  const textSrc = isMobile ? 'images/TEXT_DUCKIE_BENEFIT_MOBILE.png' : 'images/TEXT_DUCKIE_BENEFIT.png';

  return (
    <BenefitWrapper>
      <ShadowBg style={{ right: '-200px', top: '-10%', width: 400, height: 400 }} />
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', maxWidth: 992, marginBottom: 50 }} data-aos="fade-right">
          <MainImage src={textSrc} />
        </div>
        <div>
          <div className="list" data-aos="fade-left">
            {benefitList.map((item, idx: number) => {
              return (
                <div className="item" key={idx}>
                  <div className="img-wrapper" style={{ backgroundColor: item?.color_code }}>
                    <MainImage style={{ width: 275 }} src={item?.src} />
                  </div>
                  <p className="text duck-class">{item?.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="description">
          <p className="duck-class">
            {isMobile ? (
              <>
                Everyone will buy <u className="hight-light">DACKIE</u>, but the timing of the purchase will
                <u className="hight-light"> decide</u> who you are going to be...
              </>
            ) : (
              <>
                Everyone will buy <u className="hight-light">DACKIE</u>, but the timing of the <br /> purchase will
                <u className="hight-light"> decide</u> who you are going to be...
              </>
            )}
          </p>
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
  overflow: hidden;
  .list {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
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
      font-size: 28px;
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
    left: 0;
  }
  .description {
    padding: 24px 0 0 0;
    .hight-light {
      color: ${COLORs.YELLOW};
    }
    .duck-class {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 60px 10px 15px;
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
    text: `Receive rewards`,
    src: '/images/DUCKIE_7.png',
    color_code: COLORs.SKY_LESS,
  },
];
