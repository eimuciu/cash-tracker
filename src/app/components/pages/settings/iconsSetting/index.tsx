import Image from 'next/image';
{
  /* AWAITING DATA */
}
const settingData = [
  { category: 'Food', icon: '/burger.png' },
  { category: 'Car', icon: '/car.png' },
  { category: 'Sport', icon: '/sport.png' },
  { category: 'Clothes', icon: '/icons/clothing.png' },
  { category: 'Rent', icon: '/icons/house.png' },
  { category: 'Holiday', icon: '/icons/cellphone.png' },
];

export default function IconsSetting() {
  return (
    <div className="flex flex-col items-center w-[100%] gap-[10px]">
      <div className="w-[50%] flex flex-col gap-[5px]">
        {settingData.map((x) => (
          <div
            key={x.category}
            className={'text-center rounded-[5px] flex justify-between'}
          >
            {x.category}
            <div className="w-[20px] h-[20px] relative cursor-pointer">
              <Image src={x.icon} fill alt="Profile picture" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[50%] bg-[#F5F5F5] text-center rounded-[5px] py-[2.5px]">
        <button className="w-[100%] h-[100%]">Confirm</button>
      </div>
    </div>
  );
}
