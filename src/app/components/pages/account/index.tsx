'use client'
import Image from 'next/image';
import { useThemeContext } from '@/app/store/themeStore';

const commonStyles = 'cursor-pointer';

export default function AccountPage() {
  const { themeColorsList }: any = useThemeContext();
  return (
    <section
      className="rounded-[10px] h-[100%] p-[10px]"
      style={{ backgroundColor: themeColorsList.firstColor }}
    >
      <p className="font-bold">Account</p>
      <div className="text-center">
        <div className="w-[6.25rem] h-[6.25rem] relative rounded-[50%] overflow-hidden mt-[10px] mx-auto">
          <Image src="/profile.jpg" fill alt="Profile picture" />
        </div>
      </div>
      <div className="flex flex-col w-[90%] m-auto mt-[20px] gap-[10px]">
        <p className={commonStyles}>Change photo</p>
        <p className={commonStyles}>Change email</p>
        <p className={commonStyles}>Reset password</p>
      </div>
    </section>
  );
}
