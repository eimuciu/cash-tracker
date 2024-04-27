export default function ThemeSetting() {
  return (
    <div className="flex bg-[white] rounded-[10px]">
      <div className="w-[100%] gap-[10px] pl-[91.125px] pr-[25px] py-[25px] md:pl-[25px] flex flex-col">
        <section className="flex w-[50%] h-[50px] flex-col items-center bg-[#D8D4F2] rounded-[10px] p-[10px] md:w-[100%]"></section>
        <div className="h-[25px] w-[50%] rounded-[10px] bg-[#d1ac00] md:w-[100%]"></div>
        <section className="flex gap-[10px] flex-col">
          <div className="flex flex-col w-[50%] rounded-[10px] md:w-[100%] ">
            <div
              className={
                'flex h-[75px] flex-col p-[10px] h-[100%] bg-[#C6E0FF] rounded-[10px]'
              }
            ></div>
          </div>
          <div className="w-[50%] h-[100px] bg-[#91F5AD] rounded-[10px] md:w-[100%]"></div>
        </section>
      </div>
    </div>
  );
}