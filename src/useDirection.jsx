import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useDirection = () => {
    const { i18n } = useTranslation();
    const [direction, setDirection] = useState('ltr');

    useEffect(() => {
        const newDirection = i18n.language === 'ar' ? 'rtl' : 'ltr';
        setDirection(newDirection);
        document.documentElement.dir = newDirection; // Optional: Set global direction for overall text alignment

        // Cleanup function to reset direction on unmount or language change
        return () => {
            document.documentElement.dir = 'ltr'; // Reset to default if necessary
        };
    }, [i18n.language]);

    return direction;
};

export default useDirection;
