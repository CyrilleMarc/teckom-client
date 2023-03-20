import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductRegister from "./views/ProductRegister";
import UserLogin from "./views/UserLogin";
import ListProducts from './views/ListProducts'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/productRegister" element={<ProductRegister />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/userLogin" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
