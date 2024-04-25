'use client';
import { colorPalette } from '@/utils/themeUnits';
import Modal from '../../modal';
import useModal from '../../modal/useModal';
import CurrencySetting from './currencySetting';
import CategoriesSetting from './categoriesSetting';
import ColorsSetting from './colorsSetting';
import SourceSetting from './sourceSetting';
import IconsSetting from './iconsSetting';

const commonStyles = 'cursor-pointer';

export default function SettingsPage() {
  const { showModal, settingName, handleSettingClick, handleCloseModal } =
    useModal();

  return (
    <>
      <Modal
        header={settingName}
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
        className={
          'rounded-[10px] h-[100%] p-[10px]' +
          ' ' +
          `bg-[${colorPalette.violeted}]`
        }
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
        </div>
      </section>
    </>
  );
}
