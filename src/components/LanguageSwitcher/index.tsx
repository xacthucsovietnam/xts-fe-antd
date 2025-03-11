import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useCustomTranslation } from '../../hooks';

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useCustomTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || localStorage.getItem('language') || 'vi'); // Mặc định tiếng Việt

  // Đồng bộ state với i18n.language khi component mount hoặc i18n thay đổi
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'vi';
    const currentLanguage = i18n.language || savedLanguage;
    if (selectedLanguage !== currentLanguage) {
      setSelectedLanguage(currentLanguage);
      i18n.changeLanguage(currentLanguage); // Đảm bảo i18n khớp với state
    }
  }, [i18n.language, selectedLanguage, i18n]);

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value); // Thay đổi ngôn ngữ trong i18n
    localStorage.setItem('language', value); // Lưu vào localStorage
    setSelectedLanguage(value); // Cập nhật state
  };

  return (
    <Select
      value={selectedLanguage} // Hiển thị ngôn ngữ hiện tại
      onChange={handleChangeLanguage}
      style={{ width: 120 }}
    >
      <Option value="en">English</Option>
      <Option value="vi">Tiếng Việt</Option>
    </Select>
  );
};

export default LanguageSwitcher;