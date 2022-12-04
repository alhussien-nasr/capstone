import { createContext, useState } from "react";

export const CartContext = createContext({
  dorpdown: false,
  setDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
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
  const increaseQty = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id == product.id ? { ...item, quantity: ++item.quantity } : item
      )
    );
  };
  const decreaseQty = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const deleteItem = (id) => {
    console.log(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0
  );

  const value = {
    dorpdown,
    setDropdown,
    cartItems,
    addItemToCart,
    cartCount,
    increaseQty,
    decreaseQty,
    deleteItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
