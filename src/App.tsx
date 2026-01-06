import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Scavenger from "./pages/Scavenger";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";
import AboutUs from "./pages/AboutUs";
import ClickSpark from "./components/ClickSpark";
import Game from "./pages/Game";
import Home from "./landing/Home";
import Cart from "./pages/Cart.tsx";
// import useAuth from "./AuthContext.tsx";
function App() {
  // const navigate = useNavigate();
  // const auth = useAuth();
  // if (auth === null || auth.isAuthorized === null) {
  //   return <div>Loading...</div>;
  // }

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
              <Route path="/scavenger/login" element={<Login />} />
              <Route path="/scavenger/about" element={<AboutUs />} />
              <Route path="/scavenger/profile" element={<Profile />} />
              <Route path="/scavenger/cart" element={<Cart />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </Router>
        </ClickSpark>
      </div>
    </>
  );
}

export default App;
