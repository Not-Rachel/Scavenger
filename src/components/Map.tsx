import { motion } from "motion/react";
import oldParchment from "../assets/old-parchment-center-l.png";
import oldParchmentRight from "../assets/old-parchment-edge-right.png";
import oldParchmentLeft from "../assets/old-parchment-edge-left.png";
import FadeIn from "./FadeIn";
import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";

interface MapProps {
  openMap: boolean;
  clickOpenMap: () => void;
}

function Map({ openMap, clickOpenMap }: MapProps) {
  const [firstClick, setFirstClick] = useState<boolean>(false);
  const pageRef = useRef(null);

  function handleMap() {
    clickOpenMap();
    setFirstClick(true);
  }

  // Source - https://stackoverflow.com/a
  // Posted by Akshay Kumar, modified by community. See post 'Timeline' for change history
  // Retrieved 2025-11-11, License - CC BY-SA 4.0
  const navigate = useNavigate();

  return (
    <motion.div
      className="saturate-75  relative  "
      transition={{ duration: 8, type: "spring" }}
      initial={openMap ? {} : { rotate: "-90deg" }}
      animate={openMap ? { rotate: "0deg" } : {}}
      //   style={{ transformOrigin: "right center" }}
    >
      <FadeIn>
        {(onLoad) => (
          <div className="relative w-[100%] h-screen flex items-center ">
            <div
              className={`absolute w-full top-0 z-60 flex flex-row justify-center items-centerborder-2 border-white ${
                openMap ? "pointer-events-none" : ""
              }`}
            >
              <motion.img
                src={oldParchmentLeft}
                alt={"Old Parchment Left"}
                onLoad={onLoad}
                initial={!openMap ? {} : { x: "-650%" }}
                animate={!openMap ? { x: 0 } : {}}
                transition={{ duration: 4, type: "spring" }}
                onClick={clickOpenMap}
                className="h-[95vh] z-50 brightness-90 pointer-events-auto "
              />
              <motion.img
                src={oldParchmentRight}
                alt={"Old Parchment Right"}
                onLoad={onLoad}
                initial={!openMap ? {} : { x: "650%" }}
                animate={!openMap ? { x: 0 } : {}}
                transition={{ duration: 4, type: "spring" }}
                onClick={clickOpenMap}
                className=" h-[95vh] z-60 brightness-90 pointer-events-auto "
              />
            </div>
            <motion.div
              ref={pageRef}
              initial={openMap ? {} : { clipPath: "inset(0 45% 0 45%)" }}
              animate={openMap ? { clipPath: "inset(0 0% 0 0%)" } : {}}
              transition={{ duration: 4, type: "spring" }}
              onLoad={onLoad}
              className="relative pointer-events-auto z-50"
            >
              <img
                src={oldParchment}
                alt={"Old Parchment "}
                onLoad={onLoad}
                className="w-full h-[90vh] brightness-70 "
              />
              <div className="absolute flex flex-row justify-center items-center inset-0 pointer-events-none  ">
                <div className="w-[45%] z-50 opacity-85  flex-col m-8 px-2  text-orange-950 pointer-events-auto">
                  <div className="font-[Kashare] lg:text-5xl  sm:text-4xl">
                    <p>HOME</p>
                    <a href="/camp">Camping</a>
                    <a href="/hike">Hiking</a>
                    <a href="/climb">Climbing</a>
                    <a href="/fish">Fishing</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </FadeIn>
    </motion.div>
  );
}
export default Map;
