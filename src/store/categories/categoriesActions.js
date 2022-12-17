import { CATEGORIES_TYPES } from "./categoriesTypes";
export const setCategoriesMap = (categories) => ({
  type: CATEGORIES_TYPES.SET_CATEGORIES,
  payload: categories,
});
