import React, { createContext, useContext, useState } from 'react';

// Create a context for click count
const ClickCountContext = createContext();

// Provider to manage click count state
export const ClickCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Function to increment the click count
  const incrementCount = () => setCount(count + 1);

  return (
    <ClickCountContext.Provider value={{ count, incrementCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

// Custom hook to access click count context
export const useClickCount = () => useContext(ClickCountContext);
