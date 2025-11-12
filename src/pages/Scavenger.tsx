import TopNav from "../components/ScavNav";
// import { useState } from "react";
// import Typewriter from "typewriter-effect";
import FuzzyText from "../components/FuzzyText";
import Noise from "../components/Noise";
import CircularGallery from "../components/CircularGallery";
import FadeContent from "../components/FadeContent";
import ThreeModel from "../components/ThreeModel";
import FadeIn from "../components/FadeIn";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Map from "../components/Map";

import balmImg from "../assets/product-images/balm.jpeg";
import allProductsImg from "../assets/product-images/all_together.png";
import strawImg from "../assets/product-images/filter_straw.jpeg";
import bagImg from "../assets/product-images/bag.jpeg";
import cordImg from "../assets/product-images/cord.jpeg";
import fireImg from "../assets/product-images/fire_starter.jpeg";
import oldBook from "../assets/old-book2.png";
import { motion } from "motion/react";
import { use, useState } from "react";
import NotateText from "../components/NotateText";
import { useLocation, useNavigate } from "react-router-dom";
// import CircularText from "../components/CircularText";

function Home() {
  // const [count, setCount] = useState(0);
  const images = import.meta.glob("../assets/product-images/*.{jpg,jpeg,png}");
  const [viewItem, setViewItem] = useState<boolean>(false);
  const [underlineAnimation, setUnderlineAnimation] = useState<boolean>(false);
  const items = [
    {
      image: bagImg,
      text: "Hiking",
      url: "/product",
    },
    {
      image: fireImg,
      text: "Camping",
      url: "/product",
    },
    // {
    //   image: balmImg,
    //   text: "Safety",
    // },
    {
      image: cordImg,
      text: "Climbing",
    },
    {
      image: strawImg,

      text: "Backpacking",
    },
    // {
    //   image: toteImg,
    //   text: "Survival",
    // },
  ];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const openMap = searchParams.get("products") === "true";
  const navigate = useNavigate();

  function clickOpenMap() {
    const newParams = new URLSearchParams(location.search);
    newParams.set("products", openMap ? "false" : "true");
    navigate(`/scavenger?${newParams.toString()}`);
  }

  return (
    <div className="bg-black snap-mandatory snap-y overflow-y-scroll h-[100vh] flex flex-col no-scrollbar">
      <TopNav></TopNav>
      <Noise
        patternSize={900}
        patternScaleX={4}
        patternScaleY={4}
        patternRefreshInterval={2}
        patternAlpha={12}
      />
      <FadeContent
        blur={true}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <section className="relative flex h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_100%),url('assets/woof.jpg')] shadow-[inset_0_0_8px_8px_black]  bg-cover bg-no-repeat snap-start scroll-mt-0">
          <div className="w-full mt-8 mx-auto flex flex-col items-center text-center text-white [text-shadow:0_0_20px_black]">
            <motion.div
              className={`flex flex-col justify-center items-center z-60 pt-8
               ${!openMap ? "pointer-events-auto" : ""}`}
              initial={openMap ? { opacity: 1 } : { opacity: 0 }}
              animate={openMap ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
            >
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.01}
                enableHover={true}
                fontSize={64}
                fontWeight={500}
                fontFamily="revolution"
              >
                It's rough out there.
              </FuzzyText>

              <div className="font-[revolution] font-bold text-[24px] max-w-[550px] my-[15px] tracking-[4px] [text-shadow:0_0_5px_black] pointer-events-auto ">
                <h1 className="pb-8">
                  Find top of the line gear for hiking, biking, camping and
                  more...
                </h1>
                <div onClick={clickOpenMap}>
                  <NotateText>begin your journey</NotateText>
                </div>
              </div>
            </motion.div>
            <div className="absolute z-40  ">
              <Map openMap={openMap} clickOpenMap={clickOpenMap}></Map>
            </div>

            {/* <div className="h-[50vh] w-full">
              <CircularGallery
                bend={-4}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
                items={items}
                font="bolder 90px monospace"
              />
            </div> */}
          </div>
        </section>

        <section className="bg-black h-screen snap-start scroll-mt-0 flex items-center justify-center ">
          <div
            onDoubleClick={() => setViewItem(!viewItem)}
            className={`absolute z-50 ${
              viewItem ? "opacity-100" : "opacity-0"
            }`}
          >
            <ThreeModel modelSource="/Multitool_fixed.glb" />
          </div>
          <motion.div
            className=" m-8 flex flex-row justify-end"
            animate={{
              filter: viewItem ? "blur(3px)" : "blur(0px)",
              opacity: viewItem ? 0.6 : 1.0,
            }}
            initial={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* <img
                src={oldPaper}
                alt="Old paper"
                className="w-full h-full object-contain   "
              /> */}
            <FadeIn>
              {(onLoad) => (
                <div className=" h-[90vh] m-8 flex z-20 lg:-rotate-5 ">
                  <img
                    src={oldBook}
                    alt="Old book"
                    className="w-full h-full object-contain bg-none "
                    onLoad={onLoad}
                  />

                  <div className="absolute flex flex-row">
                    <div className="w-[45%] opacity-85  inset-0 flex flex-col m-8 px-2  text-orange-950">
                      <h1 className="font-[Kashare] text-5xl font-bold pb-8">
                        Multitool
                      </h1>
                      <div className="text-2xl font-[revolution] font-bold">
                        <p>
                          Compact and indispensable Includes knife, pliers,
                          screwdriver, flint, and kindling shaver. Ideal for
                          gear repair, food prep, and campsite setup. Keep it
                          accessible in your outer pocket or clipped to your
                          belt.
                        </p>
                        <p className="my-4">
                          In low light, feel for the textured grip to orient the
                          blade safely. The rest of this text is just for show
                        </p>
                      </div>
                    </div>
                    <div className="w-[45%] opacity-85 justify-center items-center inset-0 flex flex-col   text-orange-950">
                      <div className="font-[revolution] text-3xl font-bold hover:font-black">
                        <a href="/">
                          <NotateText>ADD TO CART</NotateText>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </FadeIn>
          </motion.div>
        </section>
      </FadeContent>
      <p>
        <a href="https://pngtree.com/freepng/old-grunge-open-notebook-damaged_13595593.html">
          png image from pngtree.com/
        </a>
      </p>
    </div>
  );
}

export default Home;
