import { Input } from 'antd';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';
import { MainImage, SocialList } from './common';

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="flex-block">
          <div className="block">
            <div className="email-wrapper">
              <MainImage style={{}} src="images/DUCKIE_EMAIL_TEMPLATE.png" />
              <div className="input-overlay">
                <Input />
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 25 }}>
              <MainImage style={{ maxWidth: 255 }} src="images/TEXT_DUCKIE_FOOTER_LOGO.png" />
            </div>
          </div>
          <div className="block">
            <div style={{ textAlign: 'right' }}>
              <SocialList width={40} height={40} style={{ justifyContent: 'flex-end', marginBottom: 10 }} />
              <div className="footer-text copy-right">© 2023 Dackie Labs LLC</div>
              <div className="footer-text text-yellow">Dackie & Conditions</div>
              <div className="footer-text text-yellow">Dackie & Conditions</div>
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
`;
