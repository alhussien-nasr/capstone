import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./routes/Home";
import NavigationBar from "./components/NavigationBar";
import { LogIn } from "./routes/LogIn";
import { Shop } from "./routes/Shop";
import { Checkout } from "./routes/Checkout";
import { createUser, getCategory, onAuthChangeListner } from "./utils/firebase";
import { setCurrentUser } from "./store/user/userAction";
import { setCategories } from "./store/categories/categoriesActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthChangeListner((user) => {
      if (user) {
        createUser(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const category = async () => {
      const data = await getCategory();
      dispatch(setCategories(data));
    };
    category();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="LogIn" element={<LogIn />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
