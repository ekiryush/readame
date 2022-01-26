import React from "react";
import { book } from "../assets/icons";
import { bug } from "../assets/icons";
import Result from "./Result";
import ClipLoader from "react-spinners/ClipLoader";

const SearchResultsList = ({
  fetchProp,
  handleReadingListClick,
  readingList,
}) => {
  const { results, count, error, isLoading } = fetchProp;

  let listContent = (
    <div className="mt-20 mb-24 mx-auto text-7xl opacity-50 text-white">
      {book}
    </div>
  );
  if (count === 0) {
    listContent = (
      <p className="mt-16  mb-16">Nothing was found... Try something else?</p>
    );
  }

  if (count > 0) {
    listContent = (
      <>
        <p className="mt-5">{count.toLocaleString()} results were found:</p>
        <ul className="mt-5 mb-10 mx-auto flex flex-col justify-center w-11/12 items-center">
          {results.map((result) => (
            <Result
              handleReadingListClick={handleReadingListClick}
              result={result}
              key={result.id}
              readingList={readingList}
              image={
                result.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${result.volumeInfo.imageLinks.thumbnail}`
              }
              title={result.volumeInfo.title}
              authors={
                result.volumeInfo.authors
                  ? result.volumeInfo.authors.join(", ")
                  : ""
              }
              description={result.volumeInfo.description}
              link={result.volumeInfo.infoLink}
            />
          ))}
        </ul>
      </>
    );
  }

  if (error) {
    listContent = (
      <>
        <div className="mt-5 mb-10 mx-auto text-7xl opacity-50 text-white">
          {bug}
        </div>
        <div className="mb-10 mx-auto font-base text-white">
          Something went wrong... Please try again!
        </div>
      </>
    );
  }

  if (isLoading) {
    listContent = (
      <div className="my-40">
        <ClipLoader color="#fcf4f0" size={100} />
      </div>
    );
  }

  return <>{listContent}</>;
};

export default SearchResultsList;
