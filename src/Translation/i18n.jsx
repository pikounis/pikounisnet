import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from './Languages/AR/translation.json';
import translationCN from './Languages/CN/translation.json';
import translationFR from './Languages/FR/translation.json';
import translationGR from './Languages/GR/translation.json';
import translationIN from './Languages/IN/translation.json';
import translationES from './Languages/ES/translation.json';
import translationUK from './Languages/UK/translation.json';

const storedLanguage = localStorage.getItem('language') || 'uk';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ar: { translation: translationAR },
            cn: { translation: translationCN },
            fr: { translation: translationFR },
            gr: { translation: translationGR },
            ind: { translation: translationIN },
            es: { translation: translationES },
            uk: { translation: translationUK }
        },
        lng: storedLanguage, // Use the stored language from localStorage
        fallbackLng: 'uk',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
