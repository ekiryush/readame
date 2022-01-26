import React from "react";
import { info, close } from "../assets/icons";

const BookCard = ({ image, title, link, book, handleReadingListClick }) => {
  return (
    <li className="flex flex-col justify-start items-center mt-0 m-4 w-[288px] relative">
      <img
        className="h-[384px] w-[288px] overflow-hidden"
        src={
          image.length > 0
            ? image
            : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
        }
        alt={title}
      ></img>
      <div className="h-[384px] w-[288px] absolute bg-gray flex justify-center items-center opacity-0 hover:opacity-100">
        <div className="bg-darkbrown opacity-80 p-2 rounded-xl">
          <button className="mx-3 hover:scale-150">
            <a href={link} alt={title}>
              {info}
            </a>
          </button>
          <button
            className="mx-3 hover:scale-150"
            onClick={() => {
              handleReadingListClick(book);
            }}
          >
            {close}
          </button>
        </div>
      </div>

      <p className="w-full overflow-hidden ovtext-lg mt-1 mb-3 text-center">
        {title}
      </p>
    </li>
  );
};

export default BookCard;
