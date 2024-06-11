'use client';

import React from 'react';
import NavBar from '../navbar';
import Header from './header';
import DateSeperator from './dateSeperator';
import { usePathname } from 'next/navigation';
import './style.css';
import { ThemeContextProvider } from '@/app/store/themeStore';
import { DataContextProvider } from '@/app/store/dataStore';

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  // const [elementWidth, setElementWidht] = React.useState<number>(0);
  const elRef = React.useRef<HTMLDivElement>(null);
  const [navbarStatus, setNavbarStatus] = React.useState<boolean>(false);

  const pathname = usePathname();
  const restrictedPaths = ['/account', '/settings'];

  // React.useEffect(() => {
  //   if (elRef.current) {
  //     setElementWidht(elRef.current.getBoundingClientRect().width + 25);
  //     console.log(elRef.current.getBoundingClientRect().width + 25);
  //   }
  // }, []);

  React.useEffect(() => {
    const resizeHandler = (e: any) => {
      if (e.target.innerWidth <= 768) {
        setNavbarStatus(false);
      }
    };
    if (window.innerWidth <= 768) {
      setNavbarStatus(false);
    }

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbarStatus(!navbarStatus);
  };

  return (
    <DataContextProvider>
      <ThemeContextProvider>
        {(themeColorsList: any) =>
          themeColorsList && (
            <div className="flex">
              <div
                id="shockwave"
                onClick={toggleNavbar}
                className="w-[15px] h-[15px] fixed rounded-[50%] left-[5px] top-[5px] hidden md:block outline-2 outline outline-offset-2 z-10"
                style={{
                  backgroundColor: themeColorsList.activeColor,
                  outlineColor: themeColorsList.activeColor,
                }}
              ></div>
              <div
                ref={elRef}
                style={{
                  zIndex: 2,
                  backgroundColor: themeColorsList.secondColor,
                }}
                className={
                  'py-[50px] px-[10px] min-h-screen fixed border-r-[1px]' +
                  ' ' +
                  `${navbarStatus ? 'md:block' : 'md:hidden'}`
                }
              >
                <NavBar
                  toggleNavbar={toggleNavbar}
                  setNavbarStatus={setNavbarStatus}
                />
              </div>
              <div
                className="w-[100%] pl-[71.125px] pr-[5px] py-[5px] md:pl-[5px] min-h-screen flex flex-col"
                // style={{
                //   paddingLeft: `${elementWidth}px`,
                // }}
              >
                {!restrictedPaths.includes(pathname) && (
                  <>
                    <Header /> <DateSeperator />
                  </>
                )}
                {children}
              </div>
            </div>
          )
        }
      </ThemeContextProvider>
    </DataContextProvider>
  );
}
