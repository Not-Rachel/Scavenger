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
import toteImg from "../assets/product-images/tote.jpeg";
import fireImg from "../assets/product-images/fire_starter.jpeg";
import { motion } from "motion/react";
import { use, useState } from "react";
import NotateText from "../components/NotateText";
import { useLocation, useNavigate } from "react-router-dom";
import NoteBook from "../components/Notebook";
// import CircularText from "../components/CircularText";

function Home() {
  // const [count, setCount] = useState(0);
  const images = import.meta.glob("../assets/product-images/*.{jpg,jpeg,png}");
  const [viewItem, setViewItem] = useState<boolean>(false);
  const [underlineAnimation, setUnderlineAnimation] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<number>(1);

  const items = [
    {
      key: 0,
      image: bagImg,
      name: "Multitool",
      text: "Hiking",
      model: "/Multitool_fixed.glb",
    },
    {
      key: 1,
      image: bagImg,
      name: "Backpack",
      model: "/betterbag.glb",
      text: "Awsome bag for hiking",
    },
    {
      key: 2,
      image: balmImg,
      name: "Climbing Balm",
      model: null,
      text: "Safety",
    },
    {
      key: 3,
      image: cordImg,
      name: "Coord",
      text: "Camping",
      model: null,
    },
    {
      key: 4,
      image: strawImg,
      name: "Filtered Straw",
      model: null,
      text: "camping",
    },
    {
      key: 5,
      image: toteImg,
      name: "Hiking Tote",
      model: null,
      text: "Survival",
    },
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
          </div>
        </section>

        <section className="bg-black h-screen snap-start scroll-mt-0 flex items-center justify-center ">
          {/* {viewItem && ( */}
          {items[currentItem].model && (
            <motion.div
              onDoubleClick={() => setViewItem(!viewItem)}
              className="opacity-10 absolute w-full h-screen flex items-center justify-center pointer-events-auto"
              initial={{ opacity: 0 }}
              style={{
                zIndex: viewItem ? 99 : 1,
                pointerEvents: viewItem ? "auto" : "none",
              }}
              animate={viewItem ? { opacity: 1.0 } : {}}
            >
              <ThreeModel modelSource={items[currentItem].model} scale={1.8} />
            </motion.div>
          )}
          <NoteBook
            viewItem={viewItem}
            setViewItem={setViewItem}
            item={items[0]}
          ></NoteBook>
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
