import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  dorpdown: false,
  setDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [dorpdown, setDropdown] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const product = cartItems.find((item) => item.id == productToAdd.id);
    if (!product) {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id == productToAdd.id
            ? { ...item, quantity: ++item.quantity }
            : item
        )
      );
    }
  };

  const value = { dorpdown, setDropdown, cartItems, addItemToCart };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
