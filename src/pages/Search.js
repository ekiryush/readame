import React, { useRef } from "react";
import { search } from "../assets/icons/index";
import SearchResultsList from "../components/SearchResultsList";

const Search = ({
  handleFetch,
  fetchProp,
  handleReadingListClick,
  readingList,
}) => {
  const searchInputRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFetch(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center">
      <form
        className="text-lg mt-10 relative w-2/5 min-w-[400px]"
        onSubmit={handleSubmit}
      >
        <input
          className="h-6 bg-transparent border-2 rounded-full p-5 w-full"
          placeholder="Search here..."
          ref={searchInputRef}
        ></input>
        <button className="absolute top-2 right-4" aria-label="Search">
          {search}
        </button>
      </form>
      <SearchResultsList
        fetchProp={fetchProp}
        handleReadingListClick={handleReadingListClick}
        readingList={readingList}
      />
    </div>
  );
};

export default Search;
