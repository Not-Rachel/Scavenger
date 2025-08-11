import TopNav from "../components/ScavNav";
// import { useState } from "react";
// import Typewriter from "typewriter-effect";
import FuzzyText from "../components/FuzzyText";
import Noise from "../components/Noise";

import FadeContent from "../components/FadeContent";
import Product from "../components/Product";
import ThreeModel from "../components/ThreeModel";

function Home() {
  // const [count, setCount] = useState(0);

  const items = [
    {
      image: `https://uc840fa587d13cc2b9b8cf76b038.previews.dropboxusercontent.com/p/thumb/ACsLJFdBLzFBqqRngynqhem1EpU6l69s_L9WJAlhYhlASQJxaKD32mRyIx5l5n3-ia2OVznVUs7XOB8iMFcUURDb4VDqYrcfZLbcNgWFl5HhbZUdZwe8OJWhUbwef8V32VBCL5WLk4_XiocPoY41LIxzulMbN4ApSzIjKZSr1a4e8bkpiNZeOO9CWPm_IIpsGCDHFijbuR57fkzc3t-FrY8qe5nDB-MwlXnCigGHkm5fBLJVo3a2KwKhN3DmMIZ2g5-bVRxVNf89Blb7jHYrJVaYCysqlQ6653BKM518D7sOVv8s0-jYlZxOlyN-Sa9XM5xw5kzQIXCkupDkHgLPzO55tkAHAEiJtJzYzL4T-nBcJg/p.jpeg`,
      text: "Hiking",
    },
    {
      image: `https://uc068854aa33cfdf9228ef759447.previews.dropboxusercontent.com/p/thumb/ACvxRKctvUay-K2rwd4L49LhOFfFtaAm4Kt3skrwI5sOG4SmoWCGUIMrTdUyY-YB5q2uRuQVevrjq-yhRPt7R-mrMEIoQB5e5bD1NKoXZKo5VTK3WWVxdUOmLssH1tVc5dKLlsFugINMFfT_t6RUp0rpi3e6cju4tQcE8WLWnupOxXR7CO1JTUnMUHRZ9fEEfslge6isN_CKhwC64qHDsZq1AMsYDd4iQFhU5FRBH-L7oyfJwZCZzDgw-F0xazQWSFKesvDkmNUSxtSbZWPCS90wnO12gBKvl-aeQ-ZFVnGRrTlhixmgpJff9kbF-lOWI8I5HBGROOnvJTAl3lW_-Lyk_Kunwkm2tgmyYkhUQtAZRA/p.jpeg`,
      text: "Camping",
    },
    {
      image: `https://uc3515dbdf5572049854e6c44d95.previews.dropboxusercontent.com/p/thumb/ACtEsPMdRWNjtehoZcKwLVyAosrdSNRlT8gngItes7KfPsLKzcrXLqoRBC4pMB3DrYk1SVMRZ2rhSDDoJIMZX08JhWxa4FU9j9r37KHVJLaevGZbrU27ADzlcjp1ZOg8YqxMPpWhyjiA3GY7mG7bb6gWmfH9-ttTCLDA1r0N9pf6aBRnK_6Au1tqy8vCYpqKgVMW8EMlp9IlCZdtzpR0djxXdM92TBFxEHSibx_HYyPF7txq0oaSZ09DKimXtdZhmy-XT6x9Wy_hg9NPyCZAMjtIgborsbFJlvQ__3mWVl5UulwWIFBWarYx1OBhwB5Xqzmggz_CyXah7L1tAvohL5CKb7r4rE8CO65LyAc5MFbZpQ/p.jpeg`,
      text: "Biking",
    },
    {
      image: `https://uc7ac05b55e12423a90640fa7dee.previews.dropboxusercontent.com/p/thumb/ACuHM7iSzkxcg7uZKLZdt5tBggK71eAkIFPfCH-rndLOAHZiqaO0cbSQec2Rj-651a96TvWDuNEmrk65hUfYjaQo_e_RHyxd_UoC3DhXtxZwaRAVgPeeO0jndKpMK4bC0jZMoQd1wQGLThjq5mLopoAW5c2LICK_XLPnUaTCMB0LPQuHFFoOZC2UuEQZl5LHacO7pXOmL6P4bWh7Y7M77ENe95t7vKYBr0kZWNqqRgl-zXpYTUzLhelm_6WVZFqiRDwsE7tKcId9hQdAlkSJ-HrQoQlJtm9Fu_mUh5H8reRPsMiBfTMza80edpcXcGak-J7_EA47RDeUqK1Ps8U_Dzxhm0pXYGzJexo0BHvacRmkPw/p.jpeg`,
      text: "Climbing",
    },
    {
      image: `https://ucd2b837c8bb2dbad4124b6d605d.previews.dropboxusercontent.com/p/thumb/ACtcs5cMslxxzqn7hHzmN-Fkste20IdgBwSVxU4ohcEs34QPP-zY8s3TJxBWi1Xd8NCdwNj7WrPIJUXrhGGz_W8kTf5_98hVPLxLIMyMd3fiau7bwaNVLxPgCs6MDz52XUXlhQvzOUL8vV10bhkrSrcf1gQOmClEiOivdnQISAL09x6vlYJDZIErnmB7ZZwA6D9nl_dtjWDcaAPtkVgbK9aSHOGejlhdSki4TOjveB-jW3uFFiPLlqmepClO8rk0gV1BlMpYQ6lhkmn3Y7dKTNO2JYQJI71Y3lJCmFHXP5vZWTCT6SRqlJSOz4onDD6o2T_AQoJIJHXCSI02hEiZ_tmiH-1_eHosgMs5nctrvy86Kw/p.jpeg`,
      text: "Hunting",
    },
    {
      image: `https://uca6ee4a26a7d2ea3ea2217e61ab.previews.dropboxusercontent.com/p/thumb/ACvDp2N_4p1PxgYdOM1OvkJzR3U-2SDRNCXAi8HPuqpYzHS7xWRwPK-gdX8KKeArsm9O0DqkEQdUyPLq0zj8t1dNAkjMRSIvNCX3Lj4RZ3TNdhUnHk60CTX2L4qu2Uz7kdgBEDn9509JbSS9TI-flCiqMhdUtE7YSlUg7uoWID7nCIRiM5pCnQxyxUW833y07TXAVoGl9B-f4-U0sOZV1GRfKqfLi0FbBBkjokLbHABh3ndUceoNhQWrbff5yJHNMctXFCkMwJ-om2iHZV9QDmbkPWczPlROGaLZVL66RJCj5vrl2PKi6btmv6qEX9wCLle8u9M4TS7_WVhwmEvr1YRMTGINbkVxtWDfnsbjRQawPg/p.jpeg`,
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

            <Product
              id={1}
              name={"Test Product"}
              imgPath={"/"}
              imgURL={"https://not-rachel.info"}
              description={"Sample"}
            ></Product>

            {/* <div className="h-100 w-full">
              <CircularGallery
                bend={-3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
                items={items}
                font="bolder 90px monospace"
              />
            </div> */}
          </div>
        </section>
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
      </FadeContent>
    </>
  );
}

export default Home;
