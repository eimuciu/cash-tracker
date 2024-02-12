import Image from "next/image";

export default function ListElement() {
  return (
    <div className="w-[75%] my-[20px] mx-auto flex items-center gap-[10px] md:w-[95%]">
      <div className="w-[20%]"><div className="w-[25px] h-[25px] relative"><Image src='/burger.png' alt="icon" fill /></div></div>
      <div className="w-[35%]">
        <p className="font-bold">Food</p>
        <p>02.02.2024</p>
      </div>
      <div
        className="w-[45%]"
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        <p className="font-bold">$25.00</p>
        
          I have bought some food etc etc... I have bought some food etc etc...
      </div>
    </div>
  );
}
