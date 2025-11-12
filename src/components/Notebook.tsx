import FadeIn from "./FadeIn";
import oldBook from "../assets/old-book2.png";
import NotateText from "./NotateText";
import { motion } from "motion/react";

import tote from "../assets/product-images/tote.jpeg";
interface NoteBookProps {
  viewItem: boolean;
  setViewItem: (value: boolean) => void;
  setItem: () => void;
  item: any; // Replace `any` with a more specific type if you know the structure
}

function NoteBook({ viewItem, setViewItem, setItem, item }: NoteBookProps) {
  return (
    <>
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
            <div className="relative h-auto w-[600px]  lg:w-[750px] m-8 flex z-20 lg:rotate-8 md:rotate-3  border-2  ">
              <img
                src={oldBook}
                alt="Old book"
                className="w-full h-full object-contain bg-none  "
                onLoad={onLoad}
              />

              <div className="absolute flex flex-row h-full ">
                <div className="w-[45%] opacity-85  inset-0 flex flex-col m-8 px-2  text-orange-950  pointer-events-auto ">
                  <h1 className="font-[Kashare] text-4xl font-bold pb-8">
                    {item.name}
                  </h1>
                  <div className="text-2xl font-[revolution] font-bold">
                    <p>{item.text}</p>
                    {/* <p className="my-4">Text</p> */}
                  </div>
                </div>
                <div className="font-[bleguk] relative w-[50%] m-4 inset-0 flex flex-col items-center text-orange-950 ">
                  <p>Click to view product</p>

                  <motion.img
                    src={item.image}
                    alt=""
                    className="w-[75%] h-auto object-contain bg-none hover:border-white z-60 border-3 border-stone-300 rotate-3 rounded-xl "
                    onClick={() => setViewItem(item.model != null)}
                  ></motion.img>

                  <div className="my-8 text-2xl font-bold hover:font-black z-80 brightness-90 pointer-events-auto ">
                    <a href="/">
                      <NotateText>ADD TO CART</NotateText>
                    </a>
                    <button
                      name="Next item"
                      className="my-16"
                      onClick={setItem}
                    >
                      Turn page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </FadeIn>
      </motion.div>
    </>
  );
}

export default NoteBook;
