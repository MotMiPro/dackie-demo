/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from 'antd';
import { MainImage } from 'components/common';
import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORs } from 'utils/colors';

const initState: any = {
  isLoading: true,
};

export const StateContext = createContext(initState);

const StateContextProvider = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(true);
  let timeout: any = null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      }, 2000);
    });
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <Spin
        size="large"
        spinning={loading}
        indicator={<Indicator />}
        wrapperClassName="loading-spin-wrapper"
        style={{ backgroundColor: COLORs.LAND, height: 'calc(100vh)', maxHeight: '100%' }}
      >
        {children}
      </Spin>
    </StateContext.Provider>
  );
};

export const useRealContext = () => useContext(StateContext);

export default StateContextProvider;

export const Indicator = () => {
  return (
    <IndicatorStyle className="indicator">
      <div
        className="spinning"
        style={{
          width: 100,
          height: 100,
          borderRadius: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <MainImage />
      </div>
    </IndicatorStyle>
  );
};

const IndicatorStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
