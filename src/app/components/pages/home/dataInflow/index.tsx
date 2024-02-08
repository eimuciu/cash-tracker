import DatePicker from "./datepicker";

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded';

export default function DataInflow() {
  return (
    <div className="flex flex-col h-[100%]">
      {/* <input className={commonClasses + ' '} placeholder="date" /> */}
      <DatePicker />
      <input className={commonClasses + ' '} placeholder="category" />
      <input className={commonClasses + ' '} placeholder="0.00" type="text" />
      <textarea className={commonClasses + ' ' + 'grow'} placeholder="note" />
      <button className="text-center w-[100%] rounded bg-[#F5F5F5] border border-black border-solid py-[5px] mt-[5px]">
        Confirm
      </button>
    </div>
  );
}
