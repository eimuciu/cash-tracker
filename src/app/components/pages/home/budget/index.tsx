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
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Budget not set</div>
    </div>
  );
}
