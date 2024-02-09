import LayoutWrapper from '../../layoutWrapper';
import { colorPalette } from '@/utils/themeUnits';

export default function SettingsPage() {
  return (
    <LayoutWrapper>
      <section
        className={
          'rounded-[10px] h-[100%] p-[10px]' +
          ' ' +
          `bg-[${colorPalette.violeted}]`
        }
      >
        Settings page Settings page Settings page Settings page Settings page Account
        page Stats page Settings page Settings page Settings page Settings page
        Settings page Settings page Settings page Settings page Settings page Account
        page Settings page Settings page Stats page Settings page
      </section>
    </LayoutWrapper>
  );
}
