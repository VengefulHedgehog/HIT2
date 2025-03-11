import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.scss'

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={toggleLanguage} className="language-switcher center">
            {i18n.language === 'en' ? 'RU' : 'EN'}
        </button>
    );
};

export default LanguageSwitcher;
