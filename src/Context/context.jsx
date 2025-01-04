import { createContext, useContext, useState } from "react";
import { config } from "../config";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const SECTIONS_DISTANCE = 8;
  const [currentSection, setCurrentSection] = useState(config.sections[0]);

  const value = {
    SECTIONS_DISTANCE,
    currentSection,
    setCurrentSection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
