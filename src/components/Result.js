import React from "react";

const Result = ({
  title,
  authors,
  description,
  image,
  link,
  result,
  handleReadingListClick,
  readingList,
}) => {
  const inReadingList =
    readingList.filter((book) => book.id === result.id).length > 0;

  return (
    <li className="flex flex-col my-2 border-2 rounded-3xl px-3 py-5 w-full max-w-[700px]">
      <div className="flex">
        <img
          className="mr-5 h-[180px] max-w-[128px] overflow-hidden"
          src={
            image.length > 0
              ? image
              : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
          }
          alt={title}
        ></img>

        <div className="flex flex-col w-4/5 h-[180px]">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="italic mb-1">{authors}</p>
          <div className="w-full mt-1 overflow-scroll">
            {description ? description : "No description available"}
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex justify-between">
        <button className="w-1/2 border-2 py-1 px-6 rounded-lg mr-1">
          <a href={link}>Learn More</a>
        </button>
        <button
          className="w-1/2 border-2 py-1 px-2 rounded-lg ml-1"
          onClick={() => handleReadingListClick(result)}
        >
          {inReadingList ? "Remove from Reading List" : "Add to Reading List"}
        </button>
      </div>
    </li>
  );
};

export default Result;
