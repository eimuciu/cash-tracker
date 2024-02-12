import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
  value: number;
  color: string;
  icon: string;
  category: string;
  currency: string;
  amount: number;
}

export default function BudgetListItem({
  value,
  color,
  icon,
  category,
  currency,
  amount,
}: Props) {
  return (
    <div
      className="w-[75%] my-[30px] pb-[20px] mx-auto flex items-center gap-[10px] md:w-[95%]"
      style={{ borderBottom: '1px solid black' }}
    >
      <div className="w-[33.33%] flex justify-center">
        <div className="h-[50px] w-[50px]">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({ textColor: 'black', pathColor: color })}
          />
        </div>
      </div>
      <div className="w-[33.33%] flex justify-center flex-col items-center">
        <div className="w-[25px] h-[25px] relative">
          <Image src={icon} fill alt="category" />
        </div>
        {category}
      </div>
      <div className="w-[33.33%] flex justify-center">
        {currency}
        {amount.toFixed(2)}
      </div>
    </div>
  );
}
