import LayoutWrapper from '../../layoutWrapper';
import { colorPalette } from '@/utils/themeUnits';

export default function ListPage() {
  return (
    <LayoutWrapper>
      <section
        className={
          'rounded-[10px] h-[100%] p-[10px]' +
          ' ' +
          `bg-[${colorPalette.greened}]`
        }
      >
        <div className="flex justify-between">
          <p className="font-bold">Spendings</p>
          <button className="text-center rounded bg-[#F5F5F5] border border-black border-solid px-[5px]">
            Earnings
          </button>
        </div>
      </section>
    </LayoutWrapper>
  );
}
