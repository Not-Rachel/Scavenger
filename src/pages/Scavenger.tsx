import TopNav from "../components/ScavNav";
// import { useState } from "react";
// import Typewriter from "typewriter-effect";
import FuzzyText from "../components/FuzzyText";
import Noise from "../components/Noise";
import CircularGallery from "../components/CircularGallery";
import FadeContent from "../components/FadeContent";
import Product from "../components/Product";
import ThreeModel from "../components/ThreeModel";

import balmImg from "../assets/product-images/balm.jpeg";
import allProductsImg from "../assets/product-images/all_together.png";
import strawImg from "../assets/product-images/filter_straw.jpeg";
import bagImg from "../assets/product-images/bag.jpeg";
import cordImg from "../assets/product-images/cord.jpeg";
import fireImg from "../assets/product-images/fire_starter.jpeg";
import toteImg from "../assets/product-images/tote.jpeg";
function Home() {
  // const [count, setCount] = useState(0);
  const images = import.meta.glob("../assets/product-images/*.{jpg,jpeg,png}");

  const items = [
    {
      image: bagImg,
      text: "Hiking",
      url: "/scavenger/product",
    },
    {
      image: fireImg,
      text: "Camping",
      url: "scavenger/product",
    },
    {
      image: balmImg,
      text: "Safety",
    },
    {
      image: cordImg,
      text: "Climbing",
    },
    {
      image: strawImg,

      text: "Backpacking",
    },
    {
      image: toteImg,
      text: "Survival",
    },
  ];

  return (
    <>
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
        <section className="flex h-[100vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_100%),url('assets/woof.jpg')] bg-cover bg-no-repeat">
          <div className="w-full mt-8 mx-auto flex flex-col items-center text-center text-white [text-shadow:0_0_20px_black]">
            <FuzzyText
              baseIntensity={0.1}
              hoverIntensity={0.01}
              enableHover={true}
              fontSize={64}
              fontWeight={500}
            >
              It's rough out there.
            </FuzzyText>

            <div className="font-bold text-[56px]">
              {/* <Typewriter
              options={{
                strings: [
                  "Prepare for the next adventure",
                  "Essientials for winter camping",
                  "Must-have equipment for desert hiking",
                  "What do I need in bear country?",
                  "Fire-starting for beginners",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 5,
                delay: 80,
              }}
            /> */}
            </div>
            <h2 className="font-bold text-[24px] max-w-[550px] my-[15px] tracking-[4px] [text-shadow:0_0_5px_black]">
              Find top of the line gear for hiking, biking, camping and more...
            </h2>

            {/* <Product
              id={1}
              name={"Test Product"}
              imgPath={"/"}
              imgURL={"https://not-rachel.info"}
              description={"Sample"}
            ></Product> */}

            <div className="h-100 w-full">
              <CircularGallery
                bend={-3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
                items={items}
                font="bolder 90px monospace"
              />
            </div>
          </div>
        </section>
      </FadeContent>
    </>
  );
}

export default Home;
