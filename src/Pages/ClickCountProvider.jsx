import React, { createContext, useContext, useState } from 'react';

const ClickCountContext = createContext();

export const ClickCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <ClickCountContext.Provider value={{ count, incrementCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

export const useClickCount = () => useContext(ClickCountContext);
