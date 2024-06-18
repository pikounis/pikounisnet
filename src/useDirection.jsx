import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useDirection = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const currentLang = i18n.language;
        const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
    }, [i18n.language]);
};

export default useDirection;
