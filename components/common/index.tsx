import { Image } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';
import { IconList } from 'utils/constant';

const mockIcon = '/images/DUCKIE_LOGO_PNG.png';

interface IImage {
  src?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const MainImage = (props: IImage) => {
  const { src, style, className } = props;
  const [currentSrc, setCurrentSrc] = useState(mockIcon);

  useEffect(() => {
    if (src) {
      setCurrentSrc(src);
    }
  }, [src]);

  return (
    <Image
      className={className}
      placeholder=""
      src={`${currentSrc}`}
      alt="ico"
      preview={{ visible: false, mask: false }}
      loading="eager"
      width={'100%'}
      height={'100%'}
      style={{ ...style }}
    />
  );
};

interface ISocialList {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const SocialList = (props: ISocialList) => {
  const { width = 25, height = 25, style } = props;
  return (
    <SocialWrapper style={{ ...style }}>
      {IconList.map((item, idx) => (
        <Link href={item.to} target="_blank" key={idx}>
          <a target="_blank">
            <MainImage src={item.src} style={{ width, height }} />
          </a>
        </Link>
      ))}
    </SocialWrapper>
  );
};

const SocialWrapper = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 0;
  a {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    /* opacity: 0.7; */
    &:hover {
      transform: translateY(-3px);
      opacity: 1;
    }
  }
`;

export const ShadowBg = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #ffe600 0%, rgba(19, 14, 2, 0) 100%);
  opacity: 0.4;
  position: absolute;
  width: 800px;
  height: 800px;
  filter: blur(100px);
`;

export const DuckieMini = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  .main {
    position: relative;
    z-index: 2;
    &::after {
      content: '';
      background-color: ${COLORs.YELLOW};
      position: absolute;
      width: 300px;
      height: 300px;
      inset: 0;
      margin: auto;
      z-index: -1;
      filter: blur(100px);
      opacity: 0.5;
    }
  }
`;
