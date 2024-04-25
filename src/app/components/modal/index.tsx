import { IoMdClose } from 'react-icons/io';
import { colorPalette } from '@/utils/themeUnits';

interface Props {
  children: React.ReactNode;
  header: string;
  showModal: boolean;
  closeModal: () => void;
}

export default function Modal({
  children,
  header,
  showModal,
  closeModal,
}: Props) {
  return (
    <section
      className={
        'fixed h-screen w-[100%] left-0 top-0 z-10' +
        ' ' +
        `${!showModal ? 'hidden' : 'block'}`
      }
    >
      <div className="absolute opacity-50 bg-[white] left-0 top-0 h-[100%] w-[100%]"></div>

      <div
        className={
          'max-h-[90%] overflow-y-auto relative z-1 w-[50%] flex flex-col mx-auto top-[15%] translate-y-[-15%] md:w-[90%] rounded-[5px] p-[10px]' +
          ' ' +
          `bg-[${colorPalette.blueued}]`
        }
      >
        <IoMdClose className="self-end cursor-pointer" onClick={closeModal} />
        <p className="font-bold mb-[10px]">{header}</p>
        <div className="flex justify-center flex-col items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
