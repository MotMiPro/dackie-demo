import { MainImage, ShadowBg } from 'components/common';
import { useListenMobileScreen } from 'hooks/useListenMobileView';
import styled from 'styled-components';
import { COLORs, gradient_colors } from 'utils/colors';

const DuckieImageFoote = () => <MainImage style={{ width: 200 }} src="images/DUCKIE_13.png" />;

const Roadmap = () => {
  const isMobile = useListenMobileScreen(768);

  const ListLeft = () => (
    <>
      {leftList.map((item, idx: number) => {
        return (
          <CardRoadmap key={idx}>
            <h5 className="label">{item?.label}</h5>
            <ul className="content">
              {item.childs.map((childItem, idx: number) => {
                return <li key={idx}>{childItem}</li>;
              })}
            </ul>
          </CardRoadmap>
        );
      })}
    </>
  );
  const ListRight = () => (
    <>
      {rightList.map((item, idx: number) => {
        return (
          <CardRoadmap key={idx}>
            <h5 className="label">{item?.label}</h5>
            <ul className="content">
              {item.childs.map((childItem, idx: number) => {
                return <li key={idx}>{childItem}</li>;
              })}
            </ul>
          </CardRoadmap>
        );
      })}
    </>
  );

  return (
    <RoadmapWrapper>
      <div className="container">
        <DuckieFootTop>
          <DuckieImageFoote />
        </DuckieFootTop>
        <DuckieFootTop style={{ top: 375, transform: 'rotate(-180deg)' }}>
          <DuckieImageFoote />
        </DuckieFootTop>
        <div>
          <div style={{ textAlign: 'center' }}>
            <div className="roadmap-label">
              <MainImage src="images/TEXT_DUCKIE_ROADMAP.png" />
            </div>
            <div className="phrase-text">
              <strong>Phase 1:</strong> <span>The Beginning of Dackity</span>
            </div>
          </div>
          {isMobile ? (
            <div className="card-wrapper">
              <ListLeft />
              <ListRight />
            </div>
          ) : (
            <div style={{ marginTop: 75 }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 150 }}>
                <div>
                  <div className="card-wrapper">
                    <ListLeft />
                  </div>
                </div>
                <LineCenter>
                  <div className="line">
                    <div className="dot left-dot" />
                    <div className="dot" />
                    <div className="dot left-dot" />
                    <div className="dot" />
                    <div className="dot" />
                  </div>
                </LineCenter>
                <div>
                  <div className="card-wrapper">
                    <ListRight />
                  </div>
                </div>
              </div>
            </div>
          )}

          <PharaseTags>
            <div className="phrase-text" data-aos="fade-up">
              <strong>Phase 2:</strong> <span>Dackity Hacking</span>
            </div>
            <div>
              <HackingFlex>
                {tagsList.map((text, idx: number) => {
                  return (
                    <div key={idx} data-aos="fade-up" className="item">
                      <HackingItem>
                        <div className="img-wrapper">
                          {' '}
                          <MainImage style={{ width: 20 }} src="images/DUCKIE_1.png" />
                        </div>
                        <span className="text">{text}</span>
                      </HackingItem>
                    </div>
                  );
                })}
              </HackingFlex>
            </div>
          </PharaseTags>
        </div>
        <DuckieFootBottom>
          <DuckieImageFoote />
        </DuckieFootBottom>
        <DuckieFootBottom style={{ bottom: 600, transform: 'rotate(65deg)', left: '-250px' }}>
          <DuckieImageFoote />
        </DuckieFootBottom>
      </div>
      <MainImage src="images/DUCKIE_12.png" />
      <ShadowBg style={{ left: '-600px', top: '10%' }} />
    </RoadmapWrapper>
  );
};

export default Roadmap;

const DuckieFootTop = styled.div`
  position: absolute;
  top: 200px;
  right: -300px;
  transform: rotate(-120deg);
  opacity: 0.5;
`;
const DuckieFootBottom = styled.div`
  position: absolute;
  bottom: 800px;
  left: -300px;
  opacity: 0.5;
`;

const PharaseTags = styled.div``;

const HackingFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    .item {
      width: 100%;
    }
    .img-wrapper {
      img {
        width: 35px !important;
      }
    }
  }
`;
const HackingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  padding: 20px;
  border-radius: 10px;
  .text {
    white-space: nowrap;
    color: ${COLORs.YELLOW};
    font-size: 18px;
    font-weight: 600;
  }
`;

const LineCenter = styled.div`
  padding: 0 30px;
`;

const CardRoadmap = styled.div`
  width: 100%;
  padding: 0 30px 100px 0;
  .content {
    max-width: 375px;
    width: 100%;
    min-height: 200px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(2px);
    padding: 15px 0 0 50px;
    position: relative;
    &::after,
    &::before {
      content: '';
      height: 100%;
      width: 1px;
      background: ${gradient_colors.yellowLessCard};
      position: absolute;
      right: 0;
      top: 0;
    }
    &::before {
      left: 0;
    }
  }
  h5 {
    background-color: ${COLORs.YELLOW};
    padding: 10px 15px;
    border-radius: 10px;
    width: 100%;
    color: ${COLORs.LAND};
    text-align: center;
    font-size: 22px;
    position: relative;
  }

  li {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

const RoadmapWrapper = styled.section`
  position: relative;
  .roadmap-label {
    display: inline-block;
    max-width: 992px;
    padding: 100px 0;
  }
  .phrase-text {
    font-size: 32px;
    text-align: center;
    padding: 20px 0;
  }
  .line {
    height: 100%;
    width: 1px;
    background: ${gradient_colors.yellow};
    margin: 0 auto;
    position: relative;
    .dot {
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${COLORs.YELLOW};
      top: 15px;
      border-radius: 100%;
      left: -5px;
      &:nth-child(1) {
        top: 190px;
      }
      &:nth-child(2) {
        top: 365px;
      }
      &:nth-child(3) {
        top: 535px;
      }
      &:nth-child(4) {
        top: 710px;
      }
      &::before {
        content: '';
        width: 100px;
        height: 2px;
        position: absolute;
        top: 3px;
        right: 0;
        border-bottom: 1.5px dashed ${COLORs.YELLOW};
      }
    }
    .left-dot {
      &::before {
        left: 0;
      }
    }
  }
  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
    .roadmap-label {
      max-width: 250px;
      padding: 25px 0;
    }
    .phrase-text {
      font-size: 18px;
      padding: 24px 0 50px 0;
    }
  }
`;

const leftList = [
  {
    label: 'December 2022',
    childs: [
      'Team Up',
      'Finalize Idea',
      'Launch Deggkies Collection',
      'Setup Community Channels',
      'Setup Growth Community Tools',
      'Launch Landing Page',
    ],
  },
  {
    label: 'July 2023',
    childs: ['$DACKIE Utility (reward, tip, Dackity currency)', `Launch Dackity Job's Structure`, 'Achievement system'],
  },
  {
    label: 'January 2024',
    childs: ['  Upgrade Community Structure', 'Onboard Gen 3 Dackiers'],
  },
];
const rightList = [
  {
    label: 'April 2023',
    childs: [`Marketing, Growth community Plan`, `Onboard Gen 1 Dackiers`],
  },
  {
    label: 'October 2023',
    childs: [' Launch Voting Machenism', 'Onboard Gen 2 Dackiers', 'Games Tournament'],
  },
];

const tagsList = ['Dackie Metarverse?', 'Dackie Storage?', 'Dackie Socialfi?', 'Dackie wallet?'];
