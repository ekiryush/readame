import React from "react";
import { book } from "../assets/icons";
import BookCard from "../components/BookCard";

const ReadingList = ({ readingList, handleReadingListClick }) => {
  let listContent = (
    <>
      <p>
        Your list is empty. Make a new{" "}
        <a className="underline" href="/search">
          search
        </a>
        .
      </p>
      <div className="mt-10 mb-24 mx-auto text-7xl opacity-50 text-white">
        {book}
      </div>
    </>
  );

  if (readingList.length > 0) {
    listContent = (
      <>
        <p className="mb-7">
          You have {readingList.length} books in your list:
        </p>
        <div
          className={`mb-4 ${
            readingList.length > 2
              ? "grid xl:grid-cols-3 lg:grid-cols-2"
              : "flex justify-center flex-wrap"
          }`}
        >
          {readingList.map((book) => (
            <BookCard
              book={book}
              link={book.volumeInfo.infoLink}
              title={book.volumeInfo.title}
              image={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              handleReadingListClick={handleReadingListClick}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center">
      <h1 className="font-bold mt-16 mb-6 underline decoration-wavy text-lg tracking-wider">
        My Reading List
      </h1>
      {listContent}
    </div>
  );
};

export default ReadingList;
