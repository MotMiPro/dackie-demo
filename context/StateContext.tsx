/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from 'antd';
import Image from 'next/image';
import logo_nel from 'public/images/logo_nel_transparent.png';
import { createContext, ReactElement, useContext, useEffect, useState } from 'react';

const initState: any = {
  isLoading: true,
};

export const StateContext = createContext(initState);

const StateContextProvider = ({ children }: { children: ReactElement }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
      console.log('all images finished loading');
    });
  }, []);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <Spin
        tip={<p className="loading-text">Loading...</p>}
        size="small"
        spinning={loading}
        indicator={<Indicator />}
        wrapperClassName="loading-spin-wrapper"
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
    <div className="indicator">
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <Image priority={true} src={logo_nel} className="loading-spin-icon" alt="loading" width={74} height={74} />
      </div>
    </div>
  );
};
