import React, { useState, useReducer, useEffect } from "react";
import { Route } from "react-router-dom";
import fetchBooks from "./api/index";
import ReadingList from "./pages/ReadingList";
import { fetchReducer, initialFetchState } from "./reducers/fetchReducer";
import { initialReadingListState } from "./helpers/readingListState";
import { toast } from "react-hot-toast";
import "./index.css";
import Header from "./components/Header";
import Search from "./pages/Search";
import Toast from "./UI/Toast";
import Tracker from "./pages/Tracker";
import Home from "./pages/Home";

function App() {
  const [fetchState, dispatch] = useReducer(fetchReducer, initialFetchState);
  const { results, count, isLoading, error } = fetchState;
  const [readingList, setReadingList] = useState(initialReadingListState);

  const handleFetch = async (query, startIndex = 0) => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetchBooks(query, startIndex);
      if (response.status !== 200) {
        throw new Error("Something went wrong, cannot fetch books");
      }
      const data = response.data;
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { results: data.items, count: data.totalItems },
      });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err.message });
    }
  };

  const fetchProp = { results, count, isLoading, error };

  const handleReadingListClick = (book) => {
    if (readingList.find((item) => item.id === book.id)) {
      const updatedList = readingList.filter((item) => item.id !== book.id);
      setReadingList(updatedList);
      toast("Removed from the list!");
    } else {
      setReadingList((prevState) => {
        return [...prevState, book];
      });
      toast("Added to the list!");
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "react-readame-reading-list",
      JSON.stringify(readingList)
    );
  }, [readingList]);

  return (
    <div className="text-white">
      <Header />
      <main className="bg-brown w-4/5 px-2 mx-auto opacity-80 rounded-3xl mb-20">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tracker">
          <Tracker />
        </Route>
        <Route path="/readinglist">
          <ReadingList
            readingList={readingList}
            handleReadingListClick={handleReadingListClick}
          />
        </Route>
        <Route path="/search">
          <Search
            handleFetch={handleFetch}
            fetchProp={fetchProp}
            handleReadingListClick={handleReadingListClick}
            readingList={readingList}
          />
        </Route>
        <Toast />
      </main>
    </div>
  );
}

export default App;
