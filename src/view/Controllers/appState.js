import React, { createContext, useContext, useState } from 'react';

// Tworzenie kontekstu
const AppContext = createContext();

// Komponent dostarczający kontekstu
export function AppProvider({ children }) {
  const [appState, setAppState] = useState({
    vege: '',
    diet: '',
    calories: '',
    easyCooking: '',
    fastCooking: '',
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
}
