import { Col, Row } from 'antd';
import { MainImage } from 'components/common';
import { useListenMobileScreen } from 'hooks/useListenMobileView';
import styled from 'styled-components';

const TheTeam = () => {
  const isMobile = useListenMobileScreen(768);

  const maxWidthCard = isMobile ? 290 : 360;
  const marginTop = isMobile ? 50 : 300;
  return (
    <TeamWrappert id="team">
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', maxWidth: 992 }}>
          <MainImage src="images/TEXT_DUCKIE_THETEAM.png" />
        </div>
        <div style={{ marginTop: marginTop, padding: '0 50px' }}>
          <Row gutter={isMobile ? [100, 0] : [100, 100]} className="list">
            {teamlist.map((item, idx: number) => {
              return (
                <Col xs={24} sm={24} md={12} lg={12} xl={{ span: 8 }} xxl={{ span: 8 }} key={idx}>
                  <BgCover className="egg-wrapper">
                    <div className="egg-card">
                      <div className="egg-item">
                        <MainImage
                          style={{ borderRadius: 25, maxWidth: maxWidthCard, width: '100%' }}
                          src={item?.src}
                        />
                      </div>
                    </div>
                    <div className="eggs">
                      <MainImage style={{ zIndex: 2, height: 'auto' }} src="images/DUCKIE_9.png" />
                      <div className="egg-bg-shadow">
                        <div className="title">
                          <MainImage style={{ maxWidth: 400 }} src={item?.labelSrc} />
                        </div>
                      </div>
                    </div>
                  </BgCover>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <BehideBG>
        <MainImage src="images/DUCKIE_11.png" />
      </BehideBG>
    </TeamWrappert>
  );
};

export default TheTeam;

const BgCover = styled.div`
  width: 100%;
  overflow: hidden;
  height: 450px;
`;

const BehideBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
`;

const TeamWrappert = styled.section`
  position: relative;
  .egg-card {
    position: absolute;
    bottom: 115px;
    left: 0;
    right: 0;
    transition: all 0.3s ease;
    z-index: 1;
  }
  .egg-item {
    z-index: 1;
    transition: all 0.3s ease;
  }
  .egg-wrapper {
    cursor: pointer;
    &:hover {
      .egg-card {
        bottom: 125px;
      }
    }
  }
  .eggs {
    position: absolute;
    bottom: 0;
    z-index: 2;
    left: 0;
    right: 0;
    padding: 0px 18px;
  }
  .egg-bg-shadow {
    position: absolute;
    max-width: 225px;
    width: 100%;
    bottom: 20px;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;

    h2 {
      margin-bottom: 10px;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      padding: 10px;
    }
    .sub {
      white-space: nowrap;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
    margin-top: 50px;
  }
`;

const teamlist = [
  {
    title: 'Adreanpn.eth',
    sub: 'Quackoder',
    src: 'images/DUCKIE_8.png',
    labelSrc: 'images/THE_TEAM_1.png',
    from: 'fade-right',
  },
  {
    title: 'Brian',
    sub: `Can't sleep without saying GN`,
    src: 'images/DUCKIE_8.png',
    labelSrc: 'images/THE_TEAM_2.png',
    from: 'fade-down',
  },
  {
    title: 'SmolUncle',
    sub: 'Drawing for fun(d)',
    src: 'images/DUCKIE_8.png',
    labelSrc: 'images/THE_TEAM_3.png',
    from: 'fade-left',
  },
  {
    title: 'JimN',
    sub: 'QuackDes',
    src: 'images/DUCKIE_8_1.png',
    labelSrc: 'images/THE_TEAM_4.png',
    from: 'fade-right',
  },
  {
    title: 'Fong',
    sub: 'Quack',
    src: 'images/DUCKIE_10.png',
    labelSrc: 'images/THE_TEAM_5.png',
    from: 'fade-up',
  },
  {
    title: 'Bezo',
    sub: 'Build from 0, people make 1',
    src: 'images/DUCKIE_8_2.png',
    labelSrc: 'images/THE_TEAM_6.png',
    from: 'fade-left',
  },
];
