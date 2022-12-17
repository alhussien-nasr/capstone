import { CATEGORIES_TYPES } from "./categoriesTypes";
const initialState = { categoriesMap: {} };

export const categoriesReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_TYPES.SET_CATEGORIES:
      return { ...state, categoriesMap: payload };
    default:
      return { ...state };
  }
};
