import { createContext, useState, useContext } from "react";

const UIContext = createContext();
const UFContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}

export function useUFContext() {
  return useContext(UFContext);
}

export function UIContextProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  return (
    <UIContext.Provider value={menu}>
      <UFContext.Provider value={toggle}>{children}</UFContext.Provider>
    </UIContext.Provider>
  );
}
