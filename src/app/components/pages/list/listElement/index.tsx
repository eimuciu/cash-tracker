'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  iconUrl: string;
  category: string;
  date: string;
  amount: number;
  currency: string;
  note: string;
}

export default function ListElement({
  iconUrl,
  category,
  date,
  note,
  currency,
  amount,
}: Props) {
  const [hasMouseEntered, setHasMouseEntered] = React.useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setHasMouseEntered(true);
      }}
      onMouseLeave={() => {
        setHasMouseEntered(false);
      }}
      className="w-[75%] my-[20px] mx-auto flex items-center gap-[10px] md:w-[95%]"
    >
      <div className="w-[20%]">
        <div className="w-[25px] h-[25px] relative">
          <Image src={iconUrl} alt="icon" fill />
        </div>
      </div>
      <div className="w-[35%]">
        <p className="font-bold">{category}</p>
        <p>{new Date(date).toLocaleString()}</p>
      </div>
      <div
        className="w-[45%]"
        style={{
          overflow: `${hasMouseEntered ? 'visible' : 'hidden'}`,
          whiteSpace: `${hasMouseEntered ? 'wrap' : 'nowrap'}`,
          textOverflow: 'ellipsis',
        }}
      >
        <p className="font-bold">
          {currency}
          {amount.toFixed(2)}
        </p>
        {note}
      </div>
    </div>
  );
}
