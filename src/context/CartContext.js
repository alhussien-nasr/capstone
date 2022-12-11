import { createContext, useReducer, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  dorpdown: false,
  setDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  clearItem: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM_TO_CART":
      const cartItem = addCartItem(state.cartItem, payload);
      return { ...state, cartItem: cartItem };
  }
};

const initalState = { cartItem: [], dorpdown: false };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);

  const { cartItem } = state;

  const [dorpdown, setDropdown] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemfromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItem = (id) => {
    console.log(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0
  );
  const cartTotal = cartItems.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  const value = {
    dorpdown,
    cartItems,
    cartCount,
    cartTotal,
    setDropdown,
    addItemToCart,
    removeItemfromCart,
    clearItem,
    cartItem,
    dispatch,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
