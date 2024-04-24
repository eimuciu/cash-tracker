import { useState } from 'react';

export default function useModal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [settingName, setSettingName] = useState<string>('');

  const handleSettingClick = (name: string) => {
    setSettingName(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSettingName('');
  };

  return { showModal, settingName, handleSettingClick, handleCloseModal };
}
