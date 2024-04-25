import Image from 'next/image';
import iconPathList from '../../../../../../../iconPaths.json';

export default function IconSelector() {
  return (
    <div className="flex flex-wrap gap-[10px] justify-center ">
      {iconPathList.map((x) => (
        <div
          key={x}
        >
          <div className="w-[50px] h-[50px] relative cursor-pointer">
            <Image src={x} fill alt='icon' />
          </div>
        </div>
      ))}
    </div>
  );
}
