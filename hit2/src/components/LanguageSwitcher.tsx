import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'RU' : 'EN'}
        </button>
    );
};

export default LanguageSwitcher;
