import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import portrait from "../assets/dither-bw.png";
import construction from "../assets/construction.gif";
import { ReactSVG } from "react-svg";
import scavLogo from "../assets/logo2.svg";
import github from "../assets/github-mark/github-mark-white.svg";
import Cubes from "../pages/Cubes";
function Home() {
  const navigate = useNavigate();
  const container =
    "border-1 border-white flex justify-center items-center border-dashed  w-24 md:w-48 md:h-48 sm:w-36 sm:h-36 h-24";
  return (
    <div className="flex justify-center bg-radial-[at_15%_50%] from-gray-700  to-black to-100% font-[bleguk]">
      <div className="  bg-black text-4xl  text-white h-[200vh] max-w-[700px] p-4 flex items-center flex-col  ">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            boxShadow: "inset 0 0 1500px rgba(30,35,55,0.7)",
          }}
        />

        <div className="w-full  flex flex-row justify-center  ">
          <div className=" pt-16 ">
            <h1 className="text-nowrap pb-16">Rachel Brinkman</h1>
            <p className="text-2xl">I love to design creative websites</p>
            <p className="text-2xl">
              {" "}
              Please check out any of the projects below
            </p>
          </div>
          <img
            src={portrait}
            alt="Portrait"
            className="w-64 h-auto object-cover"
          />
        </div>
        <h3 className="mt-8 w-full">Projects</h3>
        <div className="w-full grid grid-cols-3 gap-12 my-8">
          <a href="/scavenger" target="_blank" className={container}>
            <ReactSVG
              src={scavLogo}
              className="text-amber-50 w-16 sm:24 md:w-32"
            />
          </a>
          <a
            href="../../../Graphics 2024/A7/project7.html"
            target="_blank"
            className={container}
          >
            <Cubes></Cubes>
          </a>
          <a href=".." target="_blank" className={container}>
            <h1 className="text-amber-50 text-xl  w-24 md:w-32 font-[EdSloppy] text-center">
              ScavHunt
            </h1>
          </a>
          <a href=".." target="_blank" className={container}>
            <h1 className="text-amber-50 text-3xl  w-24 md:w-32 font-[Daubmark] text-center">
              Watch for Deer
            </h1>
          </a>
          <a href=".." target="_blank" className={container}>
            <h1 className="text-amber-50 text-3xl  w-24 md:w-32 font-[Daubmark] text-center">
              Cat Petterz
            </h1>
          </a>
          <a href=".." target="_blank" className={container}>
            <h1 className="text-amber-50 text-xl  w-24 md:w-32 font-[EdSloppy] text-center">
              Dither Punk
            </h1>
          </a>

          {/* <a onClick={() => navigate("/cubes")}>WebGL Demo</a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
