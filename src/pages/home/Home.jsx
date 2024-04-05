import React from "react";
import Card from "../../components/Card";
import TopPage from "../../components/TopPage";
import AdsSpace from "../../components/AdsSpace";
import { Link } from "react-router-dom";

const Home = () => {
  let cardArr = [];
  for (let i = 0; i < 6; i++) {
    cardArr.push(<Card key={i} id={i + 1} />);
  }

  return (
    <>
      <div className="flex flex-col gap-10 pb-8">
        <TopPage />
        <div className="flex flex-col gap-8 mt-10">
          <AdsSpace />
          <div className="flex flex-col gap-4">
            <h2 className="latest-post font-bold text-2xl">Latest Post</h2>
            <div className="grid grid-cols-4 items-center gap-4">{cardArr}</div>
          </div>
          <button className="border-2 px-5 py-3 w-fit mx-auto hover:bg-slate-10">
            <Link to={"/blog"}>View All Post</Link>
          </button>
        </div>
        <AdsSpace />
      </div>
    </>
  );
};

export default Home;
