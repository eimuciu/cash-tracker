import LayoutWrapper from '../../layoutWrapper';
import DataInflow from './dataInflow';

export default function HomePage() {
  return (
    <LayoutWrapper>
      <section className="flex gap-[10px] h-[100%] md:flex-col">
        <div className="flex flex-col w-[20%] rounded-[10px] h-[100%] md:w-[100%] ">
          <div className="flex">
            <p className="w-[50%] text-center p-[10px] bg-[#C6E0FF] rounded-t-[10px]">
              Expense
            </p>
            <p className="w-[50%] text-center p-[10px] bg-[white] rounded-e-[10px]">
              Income
            </p>
          </div>
          <div className="flex flex-col  p-[10px] h-[100%] bg-[#C6E0FF] rounded-e-[10px] rounded-b-[10px]">
          <p className='pt-[10px] pb-[10px] font-bold'>Expense</p>
            <DataInflow />
          </div>
        </div>
        <div className="w-[80%] bg-[#91F5AD] rounded-[10px] p-[10px] md:w-[100%]">
          Budget Setter
        </div>
      </section>
    </LayoutWrapper>
  );
}
