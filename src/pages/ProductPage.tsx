import TopNav from "../components/ScavNav";
import ThreeModel from "../components/ThreeModel";

function ProductPage() {
  return (
    <>
      <TopNav></TopNav>
      <h1>This is the Order page</h1>
      <section className="border-1 border-red-500 flex flex-col w-[100%] h-auto bg-black [box-shadow:inset_0_0_1000px_rgba(0,0,0,0.7)] justify-left">
        <div className="flex text-white m-4">
          <ThreeModel></ThreeModel>
          {/* <div className="p-4">
              <h1 className="font-bold tracking-widest text-xl">
                Product Name
              </h1>
              <p>Information about the model</p>
            </div> */}
        </div>
        {/* <ThreeModel></ThreeModel>
          <ThreeModel></ThreeModel> */}
      </section>
    </>
  );
}

export default ProductPage;
