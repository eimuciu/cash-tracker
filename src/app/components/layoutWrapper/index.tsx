'use client';

import React from 'react';
import NavBar from '../navbar';

interface Props {
  children: React.ReactElement;
}

export default function LayoutWrapper({ children }: Props) {
  // const elRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   if (elRef.current) {
  //     console.log(elRef.current.getBoundingClientRect().width + 25);
  //   }
  // }, []);

  return (
    <div className="flex">
      <div
        // ref={elRef}
        className="py-[50px] px-[10px] bg-[#D1AC00] min-h-screen fixed md:hidden"
      >
        <NavBar />
      </div>
      <div
        className={`w-[100%] bg-[red] pr-[25px] py-[50px] pl-[114.18px] md:pl-[25px]`}
      >
        {children}
      </div>
    </div>
  );
}
