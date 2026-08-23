import {createContext} from "react";

export const ThemeContext = createContext({
    color: 'green',     // Default value when provider isn't provided
});
