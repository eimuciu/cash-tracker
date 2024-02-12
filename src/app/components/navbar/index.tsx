import React from 'react';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import { MdOutlineMenuBook } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AccountNavBar from './accountNavBar';
import { iconClassNames } from '@/app/styles/classNames';

const navItemClassNames =
  'flex flex-col justify-center items-center gap-y-[5px]';

const activeNavLinkClassName = 'text-[#880D1E]';

interface Props {
  toggleNavbar: () => void;
  setNavbarStatus: any;
}

export default function NavBar({ toggleNavbar, setNavbarStatus }: Props) {
  const [showAccountNavBar, setShowAccountNavBar] =
    React.useState<boolean>(false);

  const childRefEl = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        childRefEl.current &&
        !childRefEl.current.contains(e.target) &&
        showAccountNavBar
      ) {
        setShowAccountNavBar(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showAccountNavBar]);

  const pathname = usePathname();

  const handleShowAccountNavBar = () => {
    setShowAccountNavBar(true);
  };

  return (
    <>
      <AccountNavBar
        myRef={childRefEl}
        show={showAccountNavBar}
        setNavbarStatus={setNavbarStatus}
      />
      <div className="flex flex-col gap-y-[25px]">
        <div
          onClick={handleShowAccountNavBar}
          className={
            'flex flex-col justify-center items-center mb-[50px] cursor-pointer' +
            ' ' +
            `${
              (pathname === '/account' || pathname === '/settings') &&
              activeNavLinkClassName
            }`
          }
        >
          <MdOutlineMenuBook className={iconClassNames} />
        </div>
        <div onClick={toggleNavbar} className="flex flex-col gap-y-[25px]">
          <Link href="/">
            <div
              className={
                navItemClassNames +
                ' ' +
                `${pathname === '/' && activeNavLinkClassName}`
              }
            >
              <MdAccountBalanceWallet className={iconClassNames} />
              Wallet
            </div>
          </Link>
          <Link href="/list">
            <div
              className={
                navItemClassNames +
                ' ' +
                `${pathname === '/list' && activeNavLinkClassName}`
              }
            >
              <FaList className={iconClassNames} />
              List
            </div>
          </Link>
          <Link href="/stats">
            <div
              className={
                navItemClassNames +
                ' ' +
                `${pathname === '/stats' && activeNavLinkClassName}`
              }
            >
              <ImStatsBars className={iconClassNames} />
              Stats
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
