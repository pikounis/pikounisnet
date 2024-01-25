import { createSlice } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem('theme') || 'light';
export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: initialTheme,
    },
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload;
            localStorage.setItem('theme', action.payload);
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
