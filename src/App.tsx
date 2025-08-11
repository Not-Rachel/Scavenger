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
import Cubes from "./pages/Cubes";
import Home from "./landing/Home";

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <head>
        <title>Rachel Brinkman</title>
        <link rel="icon" href="./assets/skull.ico" type="image/x-icon"></link>
      </head>

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
            <Route path="/game" element={<Game />} />
            <Route path="/cubes" element={<Cubes />} />
          </Routes>
        </Router>
      </ClickSpark>
    </>
  );
}

export default App;
