import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from './i18n';

const LanguageSynchronizer = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    useEffect(() => {
        if (i18n.language !== currentLanguage) {
            i18n.changeLanguage(currentLanguage);
        }
    }, [currentLanguage]);

    return null;
};

export default LanguageSynchronizer;
