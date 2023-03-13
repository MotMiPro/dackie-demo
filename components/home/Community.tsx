import { Carousel } from 'antd';
import { DuckieMini, MainImage } from 'components/common';
import { useRef } from 'react';
import styled from 'styled-components';

const landscapeImg = 'images/DUCKIE_3.gif';

const Community = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>();

  const NextArrowIcon = () => <MainImage style={{ width: 50 }} src="images/DUCKIE_NEXT.png" />;
  return (
    <CommunityWrapper id="about-us">
      <DuckieMini style={{ top: '50%', left: '-250px' }}>
        <div className="main" />
      </DuckieMini>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="community-label" data-aos="fade-zoom-in-down">
          <MainImage src="images/TEXT_DUCKIE_COMMUNITY.png" />
        </div>
        <div>
          <WrapperContent data-aos="fade-up">
            <div className="img-wrapper">
              <MainImage style={{ objectFit: 'contain', borderRadius: 10 }} src={landscapeImg} />
            </div>
            <div className="content ">
              <CarouselWrapper autoplay ref={carouselRef}>
                {communitySlide.map((text: string, idx: number) => (
                  <div key={idx} className="carousel-area">
                    <p className="duck-class carousel-text">{text}</p>
                  </div>
                ))}
              </CarouselWrapper>
              <NextArrowWrapper onClick={() => carouselRef.current.next()}>
                <NextArrowIcon />
              </NextArrowWrapper>
            </div>
          </WrapperContent>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;

const communitySlide = [
  'Dackity is a decentralized community governed by both NFT and non-NFT users who use and evaluate the products created by Dackiers.',
  'Dackiers will be divided into different tiers in Dackity, with higher tier Dackiers having more votingpower.',
  'Each Dackier contributes to the functioning and growth of the community by providing their own value and receiving recognition from the Dackie community. This helps to develop the income and reputation of each Dackier.',
];

const NextArrowWrapper = styled.div`
  position: absolute;
  bottom: 150px;
  left: 0px;
  right: 0px;
  text-align: center;
  cursor: pointer;
`;

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    background: transparent;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      height: 20px;
      background-image: url('images/DUCKIE_1_EGG.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  > .slick-dots li.slick-active button {
    background: transparent;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      height: 30px;
      background-image: url('images/DUCKIE_1.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

const CommunityWrapper = styled.section`
  padding: 0 0 100px 0;
  position: relative;
  h1 {
    text-align: center;
    font-size: 42px;
    margin: 24px 0;
  }
  .community-label {
    display: inline-block;
    margin-bottom: 50px;
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    .community-label {
      margin-bottom: 25px;
    }
  }
`;

const WrapperContent = styled.div`
  display: flex;
  padding: 12px;
  gap: 75px;
  height: 524px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .img-wrapper {
  }
  .content {
    padding: 25px 0;
    max-width: 325px;
    width: 100%;
    position: relative;
    height: 100%;
    .slick-list {
    }
    .slick-slider {
      display: flex;
      flex-direction: column;
      height: 455px;
    }
    ul.slick-dots {
      bottom: 0 !important;
    }
  }
  .carousel-area {
    height: 160px;
    line-height: 160px;
  }
  .carousel-text {
    font-size: 21px;
    line-height: 28px;
    font-weight: lighter;
    color: white;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    .content {
      flex: unset;
      padding: 0 15px;
    }
    .carousel-text {
      font-size: 16px;
    }
  }
`;
