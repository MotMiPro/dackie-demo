import React from 'react';
import styled from 'styled-components';
import { DuckieMini, MainImage } from 'components/common';

const duckier = '/images/DUCKIE_2.png';
const duckieTag = '/images/DUCKIE_1.png';

const Duckie = () => {
  return (
    <DuckieWrapper id="dackity">
      <DuckieMini style={{ top: '100px', left: '-150px', opacity: '0.4' }}>
        <div className="main" />
      </DuckieMini>
      <DuckieMini style={{ top: '50%', left: 'unset', right: 0 }}>
        <div className="main" />
      </DuckieMini>
      <div className="container">
        <div style={{ maxWidth: 996, margin: 'auto' }}>
          <MainImage src="images/TEXT_DUCKIE_EVERYONE.png" />
        </div>
        <div className="flex">
          <div className="duckie-img-wrapper flex-item" data-aos="fade-right">
            <MainImage src={duckier} />
          </div>
          <div className="flex-item" data-aos="fade-left">
            <div>
              <div className="duckie-tag">
                <div className="duckie-text">
                  <MainImage src="images/TEXT_DUCKIE_2.png" />
                </div>
                {duckierItem.map((item: string, idx: number) => {
                  return (
                    <div className="duckie-item" key={idx}>
                      <div className="tag-content">
                        <div className="img-wrapper">
                          <MainImage src={duckieTag} />
                        </div>
                        <span className="text">{item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DuckieWrapper>
  );
};

export default Duckie;

const DuckieWrapper = styled.section`
  padding: 100px 0;
  text-align: center;
  position: relative;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .img-wrapper {
    width: 30px;
    height: 30px;
  }
  .duckie-tag {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .tag-content {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .duckie-item {
    border-radius: 8px;
    padding: 15px 20px;
    backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: inline-block;
  }
  .text {
    white-space: pre-wrap;
    line-height: 20px;
    text-align: left;
  }
  .flex-item {
    flex: 1;
  }
  .duckie-text {
    max-width: 400px;
    display: inline-block;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 15px;
    .flex-item {
      flex: unset;
    }
    .duckie-text {
      max-width: 275px;
    }
    .duckie-tag {
      align-items: center;
      .img-wrapper {
        width: 75px;
        height: auto;
      }
    }
    .duckie-item {
      padding: 10px;
    }
  }
`;

const duckierItem = [
  'You are joining a high-quality NFT meme community',
  'You are directly contributing to the development of\nWeb3 and NFT',
  'You are a factor to help the project grow and seize\nasset xxx opportunities',
];
