import { colorPalette } from '@/utils/themeUnits';

const commonStyles = 'cursor-pointer';

export default function SettingsPage() {
  return (
    <section
      className={
        'rounded-[10px] h-[100%] p-[10px]' +
        ' ' +
        `bg-[${colorPalette.violeted}]`
      }
    >
      <p className="font-bold">Settings</p>
      <div className="flex flex-col w-[90%] m-auto mt-[20px] gap-[10px]">
        <p className={commonStyles}>Currency</p>
        <p className={commonStyles}>Categories</p>
        <p className={commonStyles}>Source</p>
        <p className={commonStyles}>Colors</p>
        <p className={commonStyles}>Icons</p>
      </div>
    </section>
  );
}
