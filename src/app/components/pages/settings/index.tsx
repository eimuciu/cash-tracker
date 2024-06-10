'use client';
import Modal from '../../modal';
import useModal from '../../modal/useModal';
import CurrencySetting from './currencySetting';
import CategoriesSetting from './categoriesSetting';
import ColorsSetting from './colorsSetting';
import SourceSetting from './sourceSetting';
import IconsSetting from './iconsSetting';
import ThemeSetting from './themeSetting';
import { useThemeContext } from '@/app/store/themeStore';

const commonStyles = 'cursor-pointer';

export default function SettingsPage() {
  const { showModal, settingName, handleSettingClick, handleCloseModal } =
    useModal();
  const { themeColorsList }: any = useThemeContext();

  return (
    <>
      <Modal
        header={settingName}
        postHeader={
          settingName == 'Currency'
            ? 'I will use the last character of your text input for a currency symbol'
            : // : settingName == 'Colors'
              // ? 'A chosen color represents the color on a chart'
              // : settingName == 'Categories'
              // ? 'Expense list'
              // : settingName == 'Source'
              // ? 'Income list'
              // : settingName == 'Icons'
              // ? ''
              ''
        }
        showModal={showModal}
        closeModal={handleCloseModal}
      >
        {settingName == 'Currency' && <CurrencySetting />}
        {settingName == 'Categories' && <CategoriesSetting />}
        {settingName == 'Colors' && <ColorsSetting />}
        {settingName == 'Source' && <SourceSetting />}
        {settingName == 'Icons' && <IconsSetting />}
      </Modal>
      <section
        className="rounded-[5px] h-[100%] p-[10px] border-[1px]"
        style={{ backgroundColor: themeColorsList.firstColor }}
      >
        <p className="font-bold">Settings</p>
        <div className="flex flex-col w-[90%] m-auto mt-[20px] gap-[10px]">
          <p
            className={commonStyles}
            onClick={() => {
              handleSettingClick('Currency');
            }}
          >
            Currency
          </p>
          <p
            className={commonStyles}
            onClick={() => {
              handleSettingClick('Categories');
            }}
          >
            Categories
          </p>
          <p
            className={commonStyles}
            onClick={() => {
              handleSettingClick('Source');
            }}
          >
            Source
          </p>
          <p
            className={commonStyles}
            onClick={() => {
              handleSettingClick('Colors');
            }}
          >
            Colors
          </p>
          <p
            className={commonStyles}
            onClick={() => {
              handleSettingClick('Icons');
            }}
          >
            Icons
          </p>
          <ThemeSetting />
        </div>
      </section>
    </>
  );
}
