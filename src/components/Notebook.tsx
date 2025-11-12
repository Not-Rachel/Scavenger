import FadeIn from "./FadeIn";
import oldBook from "../assets/old-book2.png";
import NotateText from "./NotateText";
import { motion } from "motion/react";

import tote from "../assets/product-images/tote.jpeg";
interface NoteBookProps {
  viewItem: boolean;
  setViewItem: (value: boolean) => void;
  item: any; // Replace `any` with a more specific type if you know the structure
}

function NoteBook({ viewItem, setViewItem, item }: NoteBookProps) {
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
            <div className=" h-[90vh] m-8 flex z-20 lg:-rotate-5 ">
              <img
                src={oldBook}
                alt="Old book"
                className="w-full h-full object-contain bg-none "
                onLoad={onLoad}
              />

              <div className="absolute flex flex-row">
                <div className="w-[45%] opacity-85  inset-0 flex flex-col m-8 px-2  text-orange-950  pointer-events-auto ">
                  <h1 className="font-[Kashare] text-5xl font-bold pb-8">
                    {item.name}
                  </h1>
                  <div className="text-2xl font-[revolution] font-bold">
                    <p>{item.text}</p>
                    <p className="my-4">Text</p>
                    <a href="/">
                      <NotateText>ADD TO CART</NotateText>
                    </a>
                  </div>
                </div>
                <div className="w-[45%]  inset-0 flex flex-row   text-orange-950">
                  <div className="font-[revolution] text-3xl font-bold hover:font-black z-80 brightness-90 pointer-events-auto">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-contain bg-none rotate-10 z-80"
                      onClick={() => setViewItem(true)}
                    />
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
