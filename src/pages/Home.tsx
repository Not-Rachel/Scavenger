import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import portrait from "../assets/rache2.jpg";
import construction from "../assets/construction.gif";
import { ReactSVG } from "react-svg";
import scavLogo from "../assets/logo2.svg";
import github from "../assets/github-mark-white.svg";
function Home() {
  const navigate = useNavigate();
  const container =
    "border-1 border-white flex justify-center border-dashed p-2 w-32 h-32";
  return (
    <div className="flex justify-center bg-radial-[at_15%_50%] from-yellow-400 via-blue-400 to-blue-950 to-100%">
      <div className="self-center bg-black text-3xl font-serif text-white h-[200vh] max-w-[500px] p-4 flex items-center flex-col  [box-shadow:inset_0_0_1500px_rgba(30,35,55,0.7)]">
        <div className="flex flex-row gap-8 justify-center items-center mt-8">
          <img
            src={portrait}
            alt="Portrait"
            className="border-2 border-dotted border-white w-48 h-48 object-cover"
          />
          <div className="p-2">
            <h1 className="">Rachel Brinkman</h1>
            <div className="flex flex-row items-center gap-4 my-4">
              <a href="https://github.com/Not-Rachel">
                <ReactSVG src={github} className="text-blue-200 w-12" />
              </a>
              <a href="">LinkedIn</a>
            </div>
          </div>
        </div>
        <h3 className="mt-8 w-full">Projects</h3>
        <div className="grid grid-cols-3 gap-12 my-8">
          <a
            href="https://not-rachel.info/scavenger"
            target="_blank"
            className={container}
          >
            <ReactSVG src={scavLogo} className="text-amber-50 w-21" />
          </a>
          <a
            href="https://not-rachel.info/scavenger"
            target="_blank"
            className={container}
          >
            <ReactSVG src={scavLogo} className="text-amber-50 w-21" />
          </a>
          <a
            href="https://not-rachel.info/scavenger"
            target="_blank"
            className={container}
          >
            <ReactSVG src={scavLogo} className="text-amber-50 w-21" />
          </a>
          <a
            href="https://not-rachel.info/scavenger"
            target="_blank"
            className={container}
          >
            <img src={construction} alt="Under construction" />
          </a>
          <a
            href="https://not-rachel.info/scavenger"
            target="_blank"
            className={container}
          >
            <img src={construction} alt="Under construction" />
          </a>
          <a href="/" target="_blank" className={container}>
            <img src={construction} alt="Under construction" />
          </a>
          {/* <a onClick={() => navigate("/cubes")}>WebGL Demo</a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
