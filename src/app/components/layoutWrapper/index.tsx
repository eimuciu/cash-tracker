'use client';

import React from 'react';
import NavBar from '../navbar';
import Header from './header';
import DateSeperator from './dateSeperator';
import { usePathname } from 'next/navigation';
import './style.css';

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
    <div className="flex">
      <div
        id="shockwave"
        onClick={toggleNavbar}
        className="w-[15px] h-[15px] bg-[#D1AC00] fixed rounded-[50%] right-[6px] bottom-[25%] hidden md:block outline-[#D1AC00] outline-2 outline outline-offset-2 "
      ></div>
      <div
        ref={elRef}
        style={{ zIndex: 2 }}
        className={
          'py-[50px] px-[10px] bg-[#D1AC00] min-h-screen fixed ' +
          ' ' +
          `${navbarStatus ? 'md:block' : 'md:hidden'}`
        }
      >
        <NavBar toggleNavbar={toggleNavbar} setNavbarStatus={setNavbarStatus} />
      </div>
      <div
        className="w-[100%] pl-[91.125px] pr-[25px] py-[25px] md:pl-[25px] min-h-screen flex flex-col"
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
  );
}
