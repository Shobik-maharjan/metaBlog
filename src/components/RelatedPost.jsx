import React from "react";
import Card from "./Card";

const RelatedPost = () => {
  let cardArr = [];
  for (let i = 0; i < 3; i++) {
    cardArr.push(<Card key={i} id={i + 1} />);
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Related Posts</h2>
        <div className="grid grid-cols-3 gap-4">{cardArr}</div>
      </div>
    </>
  );
};

export default RelatedPost;
