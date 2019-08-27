import { createContext } from 'react';

export const theme = {
    golden: 'theme-golden'
};

export const locale = {
    rainbow: '🌈'
};

export const ThemeContext = createContext(theme.golden);
export const LocaleContext = createContext(locale.rainbow);