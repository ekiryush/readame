import React from "react";

const Home = () => {
  return (
    <div>
      <p>" Books are a uniquely portable magic "</p>
      <div>
        <button>
          <a href="/readinglist">Reading List</a>
        </button>
        <button>
          <a href="/search">Search</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
