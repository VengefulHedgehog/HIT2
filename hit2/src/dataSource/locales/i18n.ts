import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// файл с переводами
import translations from './en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
        .init({
            resources: {
            en: {
                translation: translations,
            },
            ru: {
                translation: {}, // Оставляем пустым, чтобы возвращать оригинальный текст
            },
            },
            fallbackLng: 'ru', // Язык по умолчанию
            interpolation: {
            escapeValue: false,
            },
        });

export default i18n;