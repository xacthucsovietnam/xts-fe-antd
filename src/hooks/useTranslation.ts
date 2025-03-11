import { useTranslation } from 'react-i18next';

export const useCustomTranslation = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLanguage = localStorage.getItem('language') || 'vi'; // Mặc định tiếng Việt

  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage,
  };
};