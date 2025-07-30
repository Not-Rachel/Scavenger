import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactSVG } from "react-svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import ASCIIText from "./ASCIIText";
import VariableProximity from "./VariableProximity";
import { useRef } from "react";

function TopNav() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  return (
    <>
      <Navbar className="w-full z-50 bg-black p-2 flex flex-row text-amber-50 justify-between gap-8 ">
        <div className="flex-row flex items-center text-center gap-4 mx-8">
          <Container onClick={() => navigate("/")}>HOME</Container>
          <Container
            className="whitespace-nowrap w-fit"
            onClick={() => navigate("/about")}
          >
            ABOUT US
          </Container>
          <Container onClick={() => navigate("/info")}>INFO</Container>
          <Container
            className="whitespace-nowrap w-fit"
            onClick={() => navigate("/order")}
          >
            SIGN IN
          </Container>

          {/* <Container
            className="whitespace-nowrap w-fit"
            onClick={() => navigate("/cubes")}
          >
            WebGL DEMO
          </Container>  */}
        </div>

        <div className="mx-4 flex flex-row items-center gap-4">
          <Container
            className="whitespace-nowrap w-fit"
            onClick={() => navigate("/game")}
          >
            CART
          </Container>
          <a href="https://react.dev" target="_blank">
            <ReactSVG src={logo} className="text-amber-50 w-48" />
          </a>
        </div>
      </Navbar>
    </>
  );
}

export default TopNav;
