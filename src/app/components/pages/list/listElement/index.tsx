'use client';

import React from 'react';
import Image from 'next/image';

export default function ListElement() {
  const [hasMouseEntered, setHasMouseEntered] = React.useState<boolean>(false);
  let mouseHoldTimer: any;

  return (
    <div
      onDoubleClick={() => {
        alert('double clicked');
      }}
      //   onMouseDown={() => {
      //     clearTimeout(mouseHoldTimer);
      //     mouseHoldTimer = setTimeout(function () {
      //       alert('holding');
      //     }, 500);
      //   }}
      //   onMouseUp={() => {
      //     clearTimeout(mouseHoldTimer);
      //   }}
      className="w-[75%] my-[20px] mx-auto flex items-center gap-[10px] md:w-[95%]"
    >
      <div className="w-[20%]">
        <div className="w-[25px] h-[25px] relative">
          <Image src="/burger.png" alt="icon" fill />
        </div>
      </div>
      <div className="w-[35%]">
        <p className="font-bold">Food</p>
        <p>02.02.2024</p>
      </div>
      <div
        onMouseEnter={() => {
          setHasMouseEntered(true);
        }}
        onMouseLeave={() => {
          setHasMouseEntered(false);
        }}
        className="w-[45%]"
        style={{
          overflow: `${hasMouseEntered ? 'visible' : 'hidden'}`,
          whiteSpace: `${hasMouseEntered ? 'wrap' : 'nowrap'}`,
          textOverflow: 'ellipsis',
        }}
      >
        <p className="font-bold">$25.00</p>
        Bought food etc etc etc etc etc...
      </div>
    </div>
  );
}
