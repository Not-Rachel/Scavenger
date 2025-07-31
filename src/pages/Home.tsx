import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import portrait from "../assets/rache2.jpg";
import construction from "../assets/construction.gif";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="self-center text-3xl font-serif text-white h-[200vh] max-w-1/3 border-1 border-white p-4 flex items-center flex-col">
        <div className="flex flex-row gap-8 justify-center items-center mt-8">
          <img
            src={portrait}
            alt="Portrait"
            className="border-2 border-white w-48 h-48 object-cover"
          />
          <div className="p-4">
            <h1 className="">Rachel Brinkman</h1>
            <a href="">Github</a>
            <a href="">LinkedIn</a>
          </div>
        </div>
        <div className="text-left w-full m-8 flex flex-col border-2 border-white">
          <h2>Projects</h2>
          <p>-</p>
          <a onClick={() => navigate("/scavenger")}>Scavenger</a>
          <a onClick={() => navigate("/cubes")}>WebGL Demo</a>
        </div>
        <img
          src={construction}
          alt="Under construction"
          className=" w-24 h-auto"
        />
      </div>
    </div>
  );
}

export default Home;
