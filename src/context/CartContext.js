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
  dropdown: false,
  setDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  clearItem: () => {},
  toggleDropdown: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOOGLE_CART":
      return { ...state, dropdown: !state.dropdown };

    case "ADD_ITEM_TO_CART":
      return { ...state, cartItems: payload };
    case "REMOVE_ITEM_FROM_CART":
      return { ...state, cartItems: payload };
    case "CLEAR_ITEM_FROM_CART":
      return { ...state, cartItems: payload };
  }
};

const initalState = { cartItems: [], dropdown: false };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);

  const { cartItems, dropdown } = state;

  const addItemToCart = (productToAdd) => {
    const itemToAdd = addCartItem(state.cartItems, productToAdd);
    dispatch({ type: "ADD_ITEM_TO_CART", payload: itemToAdd });
  };

  const removeItemfromCart = (cartItemToRemove) => {
    let filteredCart = removeCartItem(cartItems, cartItemToRemove);
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: filteredCart });
  };

  const clearItem = (id) => {
    let filteredCart = cartItems.filter((item) => item.id !== id);

    dispatch({ type: "CLEAR_ITEM_FROM_CART", payload: filteredCart });
  };

  const toggleDropdown = () => {
    dispatch({ type: "TOOGLE_CART" });
  };
  const cartCount = cartItems.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0
  );
  const cartTotal = cartItems.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  const value = {
    dropdown,
    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    removeItemfromCart,
    toggleDropdown,
    clearItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
