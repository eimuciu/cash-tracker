import LayoutWrapper from '../../layoutWrapper';

export default function HomePage() {
  return (
    <LayoutWrapper>
      <section className="flex gap-[10px] h-[100%] md:flex-col">
        <div className="w-[20%] bg-[#C6E0FF] rounded-[10px] p-[10px] md:w-[100%] ">
          Data Input
        </div>
        <div className="w-[80%] bg-[#91F5AD] rounded-[10px] p-[10px] md:w-[100%]">
          Budget Setter
        </div>
      </section>
    </LayoutWrapper>
  );
}
