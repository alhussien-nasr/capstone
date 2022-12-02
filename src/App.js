import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavigationBar from "./components/NavigationBar";
import { LogIn } from "./routes/LogIn";
import { Shop } from "./routes/Shop";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
