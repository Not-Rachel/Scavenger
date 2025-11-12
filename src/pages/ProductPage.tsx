import TopNav from "../components/ScavNav";
import ThreeModel from "../components/ThreeModel";

function ProductPage() {
  return (
    <>
      <TopNav></TopNav>
      <section className="flex flex-col w-[100%] h-auto bg-black [box-shadow:inset_0_0_1000px_rgba(0,0,0,0.7)] justify-left">
        <div className="flex text-white m-4 md:flex-row flex-col-reverse flex-1">
          <div className="p-4">
            <h1 className="font-bold tracking-widest text-xl">
              Antique Wooden Box
            </h1>
            <p>Can Hold many things. Contains limes, dasies, and roses.</p>
          </div>
        </div>
        <div className="flex text-white m-4 md:flex-row flex-col-reverse flex-1">
          <div className="p-4">
            <h1 className="font-bold tracking-widest text-xl">
              Antique Wooden Box
            </h1>
            <p>Can Hold many things. Contains limes, dasies, and roses.</p>
          </div>
        </div>
        {/* <ThreeModel></ThreeModel>
          <ThreeModel></ThreeModel> */}
      </section>
    </>
  );
}

export default ProductPage;
