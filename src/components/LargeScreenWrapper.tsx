import { useEffect, useState, FC, ReactNode } from 'react';
import { NavPage } from '.';

interface LargeScreenWrapperProps {
  children: ReactNode;
}
// resize event listener logics
// resize event listener logics
// resize event listener logics
// resize event listener logics
// resize event listener logics
// resize event listener logics

export const LargeScreenWrapper: FC<LargeScreenWrapperProps> = ({
  children,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const breakPointSize = 768;

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '50vw',
          display: screenWidth >= breakPointSize ? 'block' : 'none',
        }}
      >
        {screenWidth >= breakPointSize && <NavPage />}
      </div>
      <div style={{ width: screenWidth >= breakPointSize ? '50vw' : '100vw' }}>
        {children}
      </div>
    </div>
  );
};
