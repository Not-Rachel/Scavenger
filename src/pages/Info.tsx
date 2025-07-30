import FadeContent from "../components/FadeContent";
// import FuzzyText from "../components/FuzzyText";
import TopNav from "../components/TopNav";
import Cubes from "./Cubes";

function Info() {
  return (
    <>
      <TopNav></TopNav>
      <FadeContent
        blur={true}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <section className="flex h-[200vh] bg-[url('assets/deer.jpg')] bg-contain [box-shadow:inset_0_0_1000px_rgba(0,0,0,0.7)]">
          <Cubes></Cubes>

          <div className="w-full mt-8 mx-auto flex flex-col items-center text-left text-white [text-shadow:0_0_20px_black]">
            <p className="font-bold text-[24px] max-w-[1000px] my-[15px] tracking-[4px] [text-shadow:0_0_5px_black]">
              This is a portfolio for a mock product designed by Obama's son,
              Barack.
            </p>
            <p className="font-bold text-[24px] max-w-[1000px] my-[15px] tracking-[4px] [text-shadow:0_0_5px_black]">
              Programmed by Squidward Tentacles using React.
            </p>
            <p>For business inqueries, contact yourMomsEmail@sugma.com</p>
            <p>All rights reserved</p>
          </div>
        </section>
      </FadeContent>
    </>
  );
}

export default Info;
