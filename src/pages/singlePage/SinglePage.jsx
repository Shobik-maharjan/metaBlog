import React from "react";
import Content from "../../components/Content";
import SinglePageContent from "../../components/singlePageContent";
import RelatedPost from "../../components/RelatedPost";
import Author from "../../components/Author";

const SinglePage = () => {
  return (
    <>
      <div className="w-8/12 mx-auto flex flex-col gap-4 pb-8">
        <Content limitWords={false} />
        <Author />
        <SinglePageContent />
        <RelatedPost />
      </div>
    </>
  );
};

export default SinglePage;
