/* eslint-disable react/no-unescaped-entities */
import { MainImage } from 'components/common';
import { useListenMobileScreen } from 'hooks/useListenMobileView';
import React from 'react';
import styled from 'styled-components';

const duckieCollection = 'images/DUCKIE_4.png';

const Collection = () => {
  const isMobile = useListenMobileScreen(768);

  const collectImgWidth = isMobile ? 125 : 230;
  return (
    <CollectionWrapper>
      <div className="container" data-aos="fade-up">
        <div style={{ display: 'inline-block', maxWidth: 768 }}>
          <MainImage src="images/TEXT_DUCKIE_COLLECTION.png" />
        </div>
        <p className="sub-content">
          {isMobile ? (
            <>
              Dackie is on a mission to build the premier Web 3.0 brand together with our community. We're trying to
              make it the largest community-driven NFT collection out there, providing real-world value and benefits to
              the Dackie community and the wider crypto community.
            </>
          ) : (
            <>
              Dackie is on a mission to build the premier Web 3.0 brand together with our community. We're trying <br />
              to make it the largest community-driven NFT collection out there, providing real-world value and <br />
              benefits to the Dackie community and the wider crypto community.
            </>
          )}
        </p>
      </div>
      <div className="collection-slider">
        <div data-aos="fade-up-right">
          <MappingCollection>
            {[...Array(100)].map((_, idx: number) => {
              return (
                <div style={{}} key={idx}>
                  <MainImage style={{ width: collectImgWidth }} src={duckieCollection} />
                </div>
              );
            })}
          </MappingCollection>
          <MappingCollection style={{ left: '-345px' }}>
            {[...Array(100)].map((_, idx: number) => {
              return (
                <div style={{}} key={idx}>
                  <MainImage style={{ width: collectImgWidth }} src={duckieCollection} />
                </div>
              );
            })}
          </MappingCollection>
        </div>
      </div>
    </CollectionWrapper>
  );
};

export default Collection;

const CollectionWrapper = styled.section`
  .sub-content {
    white-space: pre-wrap;
    line-height: 22px;
    font-weight: 300;
    font-size: 18px;
  }
  .collection-slider {
    margin-top: 100px;
    transform: rotate(-10deg);
  }
  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    .sub-content {
      text-align: justify;
    }
  }
`;

const MappingCollection = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  margin-bottom: 15px;
  position: relative;
  left: -230px;
`;
