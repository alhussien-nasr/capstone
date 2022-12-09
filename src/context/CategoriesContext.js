import { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../shop-data.js";
import { addCategory, getCategory } from "../utils/firebase/index.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const category = async () => {
      const data = await getCategory();
      setCategoriesMap(data);
    };
    category();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
