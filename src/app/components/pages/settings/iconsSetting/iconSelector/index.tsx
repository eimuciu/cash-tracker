import Image from 'next/image';
import iconPathList from '../../../../../../../iconPaths.json';

interface Props {
  showSelector: boolean;
  onIconSelection: (x: string) => void;
}

export default function IconSelector({ showSelector, onIconSelection }: Props) {
  return (
    <div
      className={
        'flex flex-wrap gap-[10px] justify-center' +
        ' ' +
        `${!showSelector && 'hidden'}`
      }
    >
      {iconPathList.map((x) => (
        <div
          key={x}
          onClick={() => {
            onIconSelection(x);
          }}
        >
          <div className="w-[50px] h-[50px] relative cursor-pointer">
            <Image src={x} fill alt="icon" />
          </div>
        </div>
      ))}
    </div>
  );
}
