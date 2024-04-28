import { useThemeContext } from '@/app/store/themeStore';

export default function Header() {
  const { themeColorsList }: any = useThemeContext();

  return (
    <>
      <section
        className="flex flex-col items-center rounded-[10px] p-[10px]"
        style={{ backgroundColor: themeColorsList.firstColor }}
      >
        <div className="font-bold mb-[5px]">
          <p className="text-[20px]">
            {/* AWAITING DATA */}
            January
          </p>
        </div>
        <div className="flex w-[50%] justify-around sm:w-[75%] xs:w-[100%]">
          <div className="text-center">
            <p>Income</p>
            <p className="font-bold">
              {/* AWAITING DATA */}
              $0.00
            </p>
          </div>
          <div className="text-center">
            <p>Expense</p>
            <p className="font-bold">
              {/* AWAITING DATA */}
              $0.00
            </p>
          </div>
          <div className="text-center">
            <p>Profit</p>
            <p className="font-bold">
              {/* AWAITING DATA */}
              $0.00
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
