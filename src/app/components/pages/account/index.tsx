import LayoutWrapper from '../../layoutWrapper';
import { colorPalette } from '@/utils/themeUnits';

export default function AccountPage() {
  return (
      <section
        className={
          'rounded-[10px] h-[100%] p-[10px]' +
          ' ' +
          `bg-[${colorPalette.violeted}]`
        }
      >
        Account page Account page Account page Account page Account page Account
        page Stats page Account page Account page Account page Account page
        Account page Account page Account page Account page Account page Account
        page Account page Account page Stats page Account page
      </section>
  );
}
