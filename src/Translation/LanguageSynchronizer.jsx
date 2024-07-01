import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i18n from './i18n';
import { setLanguage } from '../Store/languageSlice.jsx'; // Import the action from your slice

const LanguageSynchronizer = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    useEffect(() => {
        // Load language from localStorage if available
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage && storedLanguage !== currentLanguage) {
            dispatch(setLanguage(storedLanguage));
        } else if (!storedLanguage) {
            localStorage.setItem('language', currentLanguage);
        }

        // Save language to localStorage on change
        if (i18n.language !== currentLanguage) {
            i18n.changeLanguage(currentLanguage);
            localStorage.setItem('language', currentLanguage);
        }
    }, [currentLanguage, dispatch]);

    return null;
};

export default LanguageSynchronizer;
