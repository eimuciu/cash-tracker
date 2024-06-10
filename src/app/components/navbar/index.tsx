import React from 'react';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import { MdOutlineMenuBook } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AccountNavBar from './accountNavBar';
import { iconClassNames } from '@/app/styles/classNames';
import { useThemeContext } from '@/app/store/themeStore';

const navItemClassNames =
  'flex flex-col justify-center items-center gap-y-[5px] text-[#001229]';

interface Props {
  toggleNavbar: () => void;
  setNavbarStatus: any;
}

export default function NavBar({ toggleNavbar, setNavbarStatus }: Props) {
  const [showAccountNavBar, setShowAccountNavBar] =
    React.useState<boolean>(false);

  const childRefEl = React.useRef<HTMLDivElement>(null);

  const { themeColorsList }: any = useThemeContext();

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
        setShowAccountNavBar={setShowAccountNavBar}
      />
      <div className="flex flex-col gap-y-[25px]">
        <div
          onClick={handleShowAccountNavBar}
          className="flex flex-col justify-center items-center mb-[50px] cursor-pointer text-[#001229]"
          style={
            pathname === '/account' || pathname === '/settings'
              ? { color: themeColorsList.activeColor }
              : {}
          }
        >
          <MdOutlineMenuBook className={iconClassNames} />
        </div>
        <div onClick={toggleNavbar} className="flex flex-col gap-y-[25px]">
          <Link href="/">
            <div
              className={navItemClassNames}
              style={
                pathname === '/' ? { color: themeColorsList.activeColor } : {}
              }
            >
              <MdAccountBalanceWallet className={iconClassNames} />
              Wallet
            </div>
          </Link>
          <Link href="/list">
            <div
              className={navItemClassNames}
              style={
                pathname === '/list'
                  ? { color: themeColorsList.activeColor }
                  : {}
              }
            >
              <FaList className={iconClassNames} />
              List
            </div>
          </Link>
          <Link href="/stats">
            <div
              className={navItemClassNames}
              style={
                pathname === '/stats'
                  ? { color: themeColorsList.activeColor }
                  : {}
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
