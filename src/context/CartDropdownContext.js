import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  dorpdown: false,
  setDropdown: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [dorpdown, setDropdown] = useState(false);
  const value = { dorpdown, setDropdown };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
