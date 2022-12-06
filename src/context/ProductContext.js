import { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../shop-data.js";
import { addCategory, getCategory } from "../utils/firebase/index.js";

export const ProductsContext = createContext({
  products: SHOP_DATA,
  setProducts: () => null,
});
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  useEffect(() => {
    const category = async () => {
      const data = await getCategory();
      console.log(data, "snap");
    };
    category();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
