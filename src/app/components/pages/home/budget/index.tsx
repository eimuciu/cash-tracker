import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BudgetListItem from './budgetListItem';

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded';

export default function Budget() {
  return (
    <div className="relative h-[100%]">
      <div className="flex justify-between">
        <p className="font-bold">Budget</p>
        <button className="text-center rounded bg-[#F5F5F5] border border-black border-solid px-[5px]">
          Set budget
        </button>
      </div>
      {/* <div className="w-[75%] my-[50px] mx-auto flex items-center gap-[10px] md:w-[95%]"></div> */}
      <BudgetListItem
        value={55}
        color="green"
        icon="/burger.png"
        category="Food"
        currency="$"
        amount={222}
      />
      <BudgetListItem
        value={75}
        color="darkbluereen"
        icon="/car.png"
        category="Car"
        currency="$"
        amount={178}
      />
      <BudgetListItem
        value={85}
        color="orange"
        icon="/sport.png"
        category="Sport"
        currency="$"
        amount={178}
      />
    </div>
  );
}
