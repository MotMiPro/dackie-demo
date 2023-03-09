import { Input } from 'antd';
import { useListenMobileScreen } from 'hooks/useListenMobileView';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';
import { MainImage, SocialList } from './common';

const Footer = () => {
  const isMobile = useListenMobileScreen(768);
  const logoMobile = isMobile ? 'images/TEXT_DUCKIE_FOOTER_LOGO_MOBILE.png' : 'images/TEXT_DUCKIE_FOOTER_LOGO.png';
  const templateMobile = isMobile ? 'images/DUCKIE_EMAIL_TEMPLATE_MOBILE.png' : 'images/DUCKIE_EMAIL_TEMPLATE.png';

  const imgSize = isMobile ? 50 : 40;

  const flexStyle = isMobile ? 'space-evenly' : 'flex-end';
  return (
    <Wrapper>
      <div className="container">
        <div className="flex-block">
          <div className="block">
            <div className="email-wrapper">
              <MainImage src={templateMobile} />
              <div className="input-overlay">
                <Input />
              </div>
            </div>
          </div>
          <div className="block logo-order">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 25 }}>
              <a href="#home">
                <MainImage style={{ maxWidth: 255 }} src={logoMobile} />
              </a>
            </div>
          </div>
          <div className="block">
            <div style={{ textAlign: 'right' }}>
              <SocialList width={imgSize} height={imgSize} style={{ justifyContent: flexStyle, marginBottom: 10 }} />
              <div className={isMobile ? 'mobile-flex' : ''}>
                <div className="footer-text copy-right">© 2023 Dackie Labs LLC</div>
                <div>
                  <div className="footer-text text-yellow">Dackie & Conditions</div>
                  <div className="footer-text text-yellow">Dackie & Conditions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 0 20px 0;
  border-top: 2px solid ${COLORs.LAND};
  margin-top: 100px;
  .flex-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .block {
      flex: 1;
      .ant-image {
        width: auto !important;
      }
      .dackie {
        font-size: 52px;
      }
      &:last-child {
        display: flex;
        justify-content: flex-end;
      }
      .email-wrapper {
        padding-right: 30px;
        position: relative;
        cursor: pointer;
        .input-overlay {
          position: absolute;
          bottom: 0;
          input {
            background-color: transparent;
            border: none;
            outline: none;
            box-shadow: none;
            color: white;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .copy-right {
        font-size: 12px;
      }
      .footer-text {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }
  }

  .text-yellow {
    color: ${COLORs.YELLOW};
  }
  .mobile-flex {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
    .logo-order {
      order: -1;
    }
    .flex-block {
      flex-direction: column;
    }
    .block {
      &:last-child {
        order: 3;
      }
    }
    .email-wrapper {
      padding-right: unset !important;
    }
  }
`;
