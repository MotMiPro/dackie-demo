import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { MENU_LIST } from 'utils/constant';
import { MainImage as AppLogo, SocialList } from './common';

const AppNavbarHeader = () => {
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <HeaderWrapper id="header" className="container">
      <nav className="list">
        <div className="logo">
          <Link href={'/'}>
            <a>
              <AppLogo />
            </a>
          </Link>
        </div>
        <div className="nav-menu">
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
              }}
              key={menu.text}
              className="item"
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <div style={{ marginLeft: 100 }}>
            <SocialList width={50} height={50} />
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
};

export default AppNavbarHeader;

const NavItem = ({ text, href, active }: { text: string; href: string; active: boolean }) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? 'active' : ''} duck-class`}>{text}</a>
    </Link>
  );
};

const HeaderWrapper = styled.header`
  padding: 10px 15px;
  .list,
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: space-between;
  }
  .nav-menu {
    justify-content: flex-start;
    .duck-class {
      font-size: 28px;
      text-transform: capitalize;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  .active {
    color: rebeccapurple;
  }
`;
