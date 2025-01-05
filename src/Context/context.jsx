import { createContext, useContext, useState } from "react";
import { config } from "../config";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const SECTIONS_DISTANCE = 8;
  const [currentSection, setCurrentSection] = useState(config.sections[0]);
  const [projectTexture, setProjectTexture] = useState(
    config.projects[0].image
  );

  return (
    <AppContext.Provider
      value={{
        SECTIONS_DISTANCE,
        currentSection,
        setCurrentSection,
        projectTexture,
        setProjectTexture,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within a AppProvider");
  return context;
};
