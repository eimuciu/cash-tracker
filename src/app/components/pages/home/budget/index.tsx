import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
      {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Budget not set</div> */}
      <div className="w-[75%] my-[30px] mx-auto flex items-center gap-[10px] md:w-[95%]">
        <div className="w-[33.33%] flex justify-center">
          <div className="h-[50px] w-[50px]">
            <CircularProgressbar
              value={66}
              text={`${66}%`}
              styles={buildStyles({ textColor: 'black' })}
            />
          </div>
        </div>
        <div className="w-[33.33%] flex justify-center flex-col items-center">
          <div className="w-[25px] h-[25px] relative">
            <Image src="/car.png" fill alt="category" />
          </div>
          Car
        </div>
        <div className="w-[33.33%] flex justify-center">$250.00</div>
      </div>
      <div className="w-[75%] my-[30px] mx-auto flex items-center gap-[10px] md:w-[95%]">
        <div className="w-[33.33%] flex justify-center">
          <div className="h-[50px] w-[50px]">
            <CircularProgressbar
              value={55}
              text={`${55}%`}
              styles={buildStyles({
                trailColor: '#D8D4F2',
                // pathColor: `rgba(62, 152, 199, ${66 / 100})`,
                pathColor: `#880D1E`,

                textColor: 'black',
              })}
            />
          </div>
        </div>
        <div className="w-[33.33%] flex justify-center flex-col items-center">
          <div className="w-[25px] h-[25px] relative">
            <Image src="/burger.png" fill alt="category" />
          </div>
          Food
        </div>
        <div className="w-[33.33%] flex justify-center">$400.00</div>
      </div>
    </div>
  );
}
