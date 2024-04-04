import React from "react";
import Card from "../../components/Card";
import TopPage from "../../components/TopPage";
import AdsSpace from "../../components/AdsSpace";

const Home = () => {
  let cardArr = [];
  for (let i = 0; i < 10; i++) {
    cardArr.push(<Card key={i} />);
  }
  return (
    <>
      <div className="flex flex-col gap-20">
        <TopPage />
        <div className="my-10">
          <AdsSpace />
          <div className="flex flex-col gap-8">
            <h2 className="latest-post font-bold text-2xl">Latest Post</h2>
            <div className="grid grid-cols-4 items-center my-4 gap-4">
              {cardArr}
            </div>
            <button className="border-2 px-5 py-3 w-fit mx-auto">
              View All Post
            </button>
          </div>
        </div>
        <AdsSpace />
      </div>
    </>
  );
};

export default Home;
