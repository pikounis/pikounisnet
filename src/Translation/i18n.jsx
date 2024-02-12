import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from './languages/AR/translation.json';
import translationCN from './languages/CN/translation.json';
import translationFR from './languages/FR/translation.json';
import translationGR from './languages/GR/translation.json';
import translationIN from './languages/IN/translation.json';
import translationES from './languages/ES/translation.json';
import translationUK from './languages/UK/translation.json';

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
        lng: 'uk',
        fallbackLng: 'uk',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
