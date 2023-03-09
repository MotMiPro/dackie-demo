import styled from 'styled-components';
import Banner from './Banner';
import Benefit from './Benefit';
import Collection from './Collection';
import Community from './Community';
import Duckie from './Duckie';
import Roadmap from './Roadmap';
import TheTeam from './TheTeam';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Banner />
      <Duckie />
      <Community />
      <Collection />
      <Benefit />
      <Roadmap />
      <TheTeam />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  h1 {
    text-align: center;
    margin: 50px 0;
    font-size: 52px;
  }
`;
