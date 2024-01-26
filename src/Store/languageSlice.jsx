import { createSlice } from '@reduxjs/toolkit';


const initialLanguage = localStorage.getItem('language') || 'uk';

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        currentLanguage: initialLanguage, // Updated property name
    },
    reducers: {
        setLanguage: (state, action) => { // Renamed to 'setLanguage'
            state.currentLanguage = action.payload;
            localStorage.setItem('language', action.payload);
        },
    },
});

// Exporting the renamed action
export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
