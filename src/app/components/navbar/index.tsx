import { MdAccountBalanceWallet } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import { MdOutlineMenuBook } from 'react-icons/md';

const iconClassNames = 'w-[2rem] h-[2rem]';

const navItemClassNames =
  'flex flex-col justify-center items-center gap-y-[5px]';

export default function NavBar() {
  return (
    <div className="flex flex-col gap-y-[25px]">
      <div className="flex flex-col justify-center items-center mb-[50px]">
        <MdOutlineMenuBook className={iconClassNames} />
      </div>
      <div className={navItemClassNames}>
        <MdAccountBalanceWallet className={iconClassNames} />
        Wallet
      </div>
      <div className={navItemClassNames}>
        <FaList className={iconClassNames} />
        List
      </div>
      <div className={navItemClassNames}>
        <ImStatsBars className={iconClassNames} />
        Stats
      </div>
    </div>
  );
}
