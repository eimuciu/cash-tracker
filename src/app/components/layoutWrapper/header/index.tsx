export default function Header() {
  return (
    <>
      <section className="flex flex-col items-center bg-[#D8D4F2] rounded-[10px] p-[25px]">
        <div className="font-bold mb-[25px]">
          <p className="text-[1.33rem]">
            {/* AWAITING DATA */}
            January
          </p>
        </div>
        <div className="flex w-[50%] justify-between">
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
