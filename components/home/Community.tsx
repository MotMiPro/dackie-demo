import { DuckieMini, MainImage } from 'components/common';
import React from 'react';
import styled from 'styled-components';

const landscapeImg = 'images/DUCKIE_3.png';

const Community = () => {
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
              <MainImage style={{ objectFit: 'contain' }} src={landscapeImg} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Dackity</strong> is a decentralized community governed by both NFT and non-NFT users who use
                  and evaluate the products created by <strong>Dackiers</strong>.
                </li>
                <li>
                  <strong>Dackiers</strong> will be divided into different tiers in Dackity, with higher tier{' '}
                  <strong>Dackiers</strong>
                  having more voting power.
                </li>
                <li>
                  Each <strong>Dackier</strong> contributes to the functioning and growth of the community by providing
                  their own value and receiving recognition from the <strong>Dackie community</strong>. This helps to
                  develop the income and reputation of each <strong>Dackier</strong>.
                </li>
              </ul>
            </div>
          </WrapperContent>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;

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
    flex: 2;
  }
  .content {
    flex: 1;
    padding: 25px 0;
  }
  li {
    font-size: 21px;
    line-height: 28px;
    font-weight: lighter;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    .content {
      flex: unset;
      padding: 0 15px;
    }
    li {
      font-size: 16px;
    }
  }
`;
