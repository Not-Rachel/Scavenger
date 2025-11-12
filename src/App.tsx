import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Scavenger from "./pages/Scavenger";
import Order from "./pages/Order";
import Info from "./pages/Info";
import AboutUs from "./pages/AboutUs";
import ClickSpark from "./components/ClickSpark";
import Game from "./pages/Game";
import Home from "./landing/Home";
import ProductPage from "./pages/ProductPage.tsx";
function App() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="bg-black">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scavenger" element={<Scavenger />} />
              <Route path="/scavenger/info" element={<Info />} />
              <Route path="/scavenger/about" element={<AboutUs />} />
              <Route path="/scavenger/order" element={<Order />} />
              {/* <Route path="/scavenger/product" element={<ProductPage />} /> */}
              <Route path="/game" element={<Game />} />
            </Routes>
          </Router>
        </ClickSpark>
      </div>
    </>
  );
}

export default App;
