import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Info from "./pages/Info";
import AboutUs from "./pages/AboutUs";
import ClickSpark from "./components/ClickSpark";
import Game from "./pages/Game";
import Cubes from "./pages/Cubes";

function App() {
  return (
    <>
      <head>
        <title>s c a v e n g e r</title>
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
            <Route path="/info" element={<Info />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/order" element={<Order />} />
            <Route path="/game" element={<Game />} />
            <Route path="/cubes" element={<Cubes />} />
          </Routes>
        </Router>
      </ClickSpark>
    </>
  );
}

export default App;
