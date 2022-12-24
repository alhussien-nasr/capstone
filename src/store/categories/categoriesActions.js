import { CATEGORIES_TYPES } from "./categoriesTypes";
export const setCategories = (categories) => ({
  type: CATEGORIES_TYPES.SET_CATEGORIES,
  payload: categories,
});
