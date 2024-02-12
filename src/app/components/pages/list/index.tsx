import LayoutWrapper from '../../layoutWrapper';
import { colorPalette } from '@/utils/themeUnits';
import ListElement from './listElement';

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
        <div>
          <ListElement
            iconUrl="/burger.png"
            category="Food"
            date="02.02.2024"
            note="Bought food etc etc etc etc"
            currency="$"
            price={26.58}
          />
          <ListElement
            iconUrl="/car.png"
            category="Car"
            date="02.02.2024"
            note="Petrol"
            currency="$"
            price={25.0}
          />
        </div>
      </section>
    </LayoutWrapper>
  );
}
