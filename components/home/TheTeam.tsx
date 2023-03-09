import { Col, Row } from 'antd';
import { MainImage } from 'components/common';
import styled from 'styled-components';

const TheTeam = () => {
  return (
    <TeamWrappert>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', maxWidth: 992 }}>
          <MainImage src="images/TEXT_DUCKIE_THETEAM.png" />
        </div>
        <div style={{ marginTop: 300, padding: '0 50px' }}>
          <Row gutter={[72, 300]} className="list">
            {teamlist.map((item, idx: number) => {
              return (
                <Col span={8} key={idx}>
                  <div className="egg-wrapper">
                    <div className="eggs">
                      <div className="egg-card">
                        <MainImage style={{ zIndex: 2 }} src="images/DUCKIE_9.png" />
                        <div className="egg-item">
                          <MainImage style={{ borderRadius: 25, maxWidth: 320, width: '100%' }} src={item?.src} />
                        </div>
                      </div>
                      <div className="egg-bg-shadow">
                        <div className="title">
                          <MainImage style={{ maxWidth: 400 }} src={item?.labelSrc} />
                        </div>
                      </div>
                    </div>
                  </div>
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

const BehideBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
`;

const TeamWrappert = styled.section`
  position: relative;
  .egg-card {
    position: relative;
    transition: all 0.3s ease-in-out;
    .ant-image {
      z-index: 2;
    }
    &:hover {
      .egg-item {
        top: -210px;
      }
    }
  }
  .egg-item {
    position: absolute;
    top: -198px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: all 0.3s ease;
    .ant-image {
      display: flex;
      justify-content: center;
    }
  }
  .egg-wrapper {
    cursor: pointer;
  }
  .eggs {
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
