import { IoMdClose } from 'react-icons/io';
import { colorPalette } from '@/utils/themeUnits';
import { useThemeContext } from '@/app/store/themeStore';

interface Props {
  children: React.ReactNode;
  header: string;
  postHeader?: string;
  showModal: boolean;
  closeModal: () => void;
}

export default function Modal({
  children,
  header,
  postHeader,
  showModal,
  closeModal,
}: Props) {
  const { themeColorsList }: any = useThemeContext();
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
        className="max-h-[85%] overflow-y-auto relative z-1 w-[50%] flex flex-col mx-auto top-[50%] translate-y-[-50%] md:w-[90%] rounded-[5px] p-[10px]"
        style={{ backgroundColor: themeColorsList.thirdColor }}
      >
        <div className="self-end cursor-pointer">
          <IoMdClose onClick={closeModal} />
        </div>
        <p className="font-bold mb-[10px]">
          {header}
          <span className="text-[10px] font-normal block">
            {postHeader && postHeader}
          </span>
        </p>
        <div className="flex justify-center flex-col items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
