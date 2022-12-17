const initalState = {
  dropdown: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOOGLE_CART":
      return { ...state, dropdown: !state.dropdown };

    case "ADD_ITEM_TO_CART":
      return { ...state, ...payload };
    case "REMOVE_ITEM_FROM_CART":
      return { ...state, ...payload };
    case "CLEAR_ITEM_FROM_CART":
      return { ...state, ...payload };
    default:
      return state;
  }
};
