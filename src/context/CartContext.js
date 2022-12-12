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
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOOGLE_CART":
      return { ...state, dropdown: !state.dropdown };

    case "ADD_ITEM_TO_CART":
      const itemToAdd = addCartItem(state.cartItems, payload);
      return { ...state, cartItems: itemToAdd };
    case "REMOVE_ITEM_FROM_CART":
      let filteredCart = removeCartItem(state.cartItems, payload);
      return { ...state, cartItems: filteredCart };
    case "CLEAR_ITEM_FROM_CART":
      let removeFromCart = state.cartItems.filter(
        (item) => item.id !== payload
      );
      return { ...state, cartItems: removeFromCart };
  }
};

const initalState = { cartItems: [], dropdown: false };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);

  const { cartItems, dropdown } = state;

  const addItemToCart = (productToAdd) => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: productToAdd });
  };

  const removeItemfromCart = (cartItemToRemove) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: cartItemToRemove });
  };

  const clearItem = (id) => {
    dispatch({ type: "CLEAR_ITEM_FROM_CART", payload: id });
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
