import { useListenMobileScreen } from 'hooks/useListenMobileView';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';
import { MENU_LIST } from 'utils/constant';
import { MainImage as AppLogo, MainImage, SocialList } from './common';

const AppNavbarHeader = () => {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [open, setOpen] = useState(false);

  // const isIpad = useListenMobileScreen();
  const isMobile = useListenMobileScreen(768);

  const drawMobileMenu = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [open]);

  const MenuList = () => (
    <>
      {MENU_LIST.map((menu, idx) => (
        <div
          onClick={() => {
            setActiveIdx(idx);
          }}
          key={menu.text}
        >
          <NavItem active={activeIdx === idx} {...menu} />
        </div>
      ))}
    </>
  );

  const MenuMobile = () => {
    return <MainImage style={{ width: 50 }} src="/images/MOBILE_MENU.png" />;
  };

  return (
    <HeaderWrapper id="header" className="container">
      <nav className="list">
        <div className="logo">
          <Link href={'/'}>
            <a>
              <AppLogo style={{ width: isMobile ? '50px' : '100%' }} />
            </a>
          </Link>
        </div>
        <div className="nav-menu">
          {isMobile ? (
            <>
              <div onClick={drawMobileMenu}>
                <MenuMobile />
              </div>
              <DrawOverwrite>
                {open && <div className="mask-mobile" />}
                <div className="menu-mobile-responsive-content" style={{ width: open ? '90%' : '0' }}>
                  {open && (
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 30,
                        }}
                        className="top-header-menu-mobile-responsive"
                      >
                        <div onClick={() => setOpen(false)}>
                          <AppLogo style={{ width: 50 }} />
                        </div>
                        <div onClick={drawMobileMenu}>
                          <MainImage src={'/images/CLOSE.svg'} />
                        </div>
                      </div>
                      <div className="mobile-menu-list">
                        <MenuList />
                      </div>
                      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0 }}>
                        <SocialList style={{ justifyContent: 'space-around' }} width={50} height={50} />
                      </div>
                    </div>
                  )}
                </div>
              </DrawOverwrite>
            </>
          ) : (
            <>
              <MenuList />
              <div style={{ marginLeft: 100 }}>
                <SocialList width={50} height={50} />
              </div>
            </>
          )}
        </div>
      </nav>
    </HeaderWrapper>
  );
};

export default AppNavbarHeader;

const NavItem = ({ text, active, idElement }: { text: string; active: boolean; idElement: string }) => {
  return (
    <span>
      <a href={idElement} className={`item ${active ? 'active' : ''} duck-class`}>
        {text}
      </a>
    </span>
  );
};

const HeaderWrapper = styled.header`
  padding: 10px 15px;
  .list,
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 5px;
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
    border: 1px solid ${COLORs.YELLOW};
    background-color: ${COLORs.LAND};
    box-shadow: 0px 4px 6px rgba(255, 214, 0, 0.4);
    border-radius: 10px;
    padding: 8px 18px;
  }
  .item {
    transition: all 0.3s ease-in-out;
    padding: 8px 18px;
    border: 1px solid transparent;
    border-radius: 10px;
    &:hover {
      border: 1px solid ${COLORs.YELLOW};
      background-color: ${COLORs.LAND};
      box-shadow: 0px 4px 6px rgba(255, 214, 0, 0.4);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

const DrawOverwrite = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  .mask-mobile {
    position: absolute;
    inset: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.45);
    pointer-events: auto;
  }

  .menu-mobile-responsive-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: -6px 0 16px -8px #00000014, -9px 0 28px #0000000d, -12px 0 48px 16px #00000008;
    background-color: #1d1503;
    transition: all 0.3s ease;
    z-index: 1001;
    pointer-events: all;
  }
  .top-header-menu-mobile-responsive {
    padding: 12px 24px;
    border-bottom: 1px solid rgba(249, 250, 250, 0.1);
  }
  .mobile-menu-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 24px;
  }
`;
