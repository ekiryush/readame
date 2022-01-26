import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-screen h-24 bg-brown opacity-90 mb-20">
      <nav className="h-full w-3/4 flex items-center justify-between mx-auto">
        <h1 className="font-base font-bold text-3xl">READAME</h1>
        <ul className="flex text-xl">
          <li className="mr-10">
            <Link to="/trackerreadinglist">My Tracker</Link>
          </li>
          <li className="mr-10">
            <Link to="/readinglist">Reading List</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
