import React from "react";

const Content = ({ limitWords }) => {
  const originalText =
    "The Impact of Technology on the Workplace: How Technology is Changing";

  const maxWords = 7;

  const turncateText = (text, maxLength) => {
    const words = text.split(" ").slice(0, maxLength).join(" ");
    return words;
  };

  const turncatedText = turncateText(originalText, maxWords);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="heading py-2">
          <div className="badge">
            <p className="text-blue-700 rounded-md text-sm p-2 bg-blue-50 w-fit">
              Technology
            </p>
          </div>
          <h2 className="text-xl font-semibold hover:text-blue-800">
            {limitWords ? turncatedText + " ..." : originalText}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Content;
