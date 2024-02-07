import Image from 'next/image';
import { MdManageAccounts } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { iconClassNames } from '@/app/styles/classNames';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

interface Props {
  show: boolean;
  myRef: any;
}

const commonPaddingX = 'px-[25px]';

const commonNavItem = 'flex items-center my-[15px] gap-[25px]';

const commonBorder =
  'flex items-center justify-between w-[100%] border-b border-black border-solid pb-[10px]';

export default function AccountNavBar({ show, myRef }: Props) {
  return (
    <>
      <div
        ref={myRef}
        className={`fixed top-0 left-0 bg-[white] h-screen py-[25px] border-solid border-black border-r min-w-[25%] ${
          !show && 'hidden'
        }`}
      >
        <div
          className={
            'pb-[25px] border-solid border-black border-b text-center' +
            ' ' +
            commonPaddingX
          }
        >
          <div className="w-[6.25rem] h-[6.25rem] relative rounded-[50%] overflow-hidden mx-auto mb-[10px]">
            <Image src="/profile.jpg" fill alt="Profile picture" />
          </div>
          email@email.com
        </div>
        <div className={commonPaddingX + ' ' + 'flex flex-col pt-[25px]'}>
          <Link href="/account">
            <div className={commonNavItem}>
              <MdManageAccounts className={iconClassNames} />
              <div className={commonBorder}>
                My Account
                <IoIosArrowForward className="w-[1rem] h-[1rem]" />
              </div>
            </div>
          </Link>
          <Link href="/settings">
            <div className={commonNavItem}>
              <IoSettingsSharp className={iconClassNames} />
              <div className={commonBorder}>
                Settings
                <IoIosArrowForward className="w-[1rem] h-[1rem]" />
              </div>
            </div>
          </Link>
          <div className={commonNavItem}>
            <MdLogout className={iconClassNames} />
            <div className={commonBorder}>
              Logout
              <IoIosArrowForward className="w-[1rem] h-[1rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
