import React from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Header = ({ onSearch }) => {
    const [input, setInput] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = input.trim();
        setSearchParams({ search: searchTerm });
        onSearch(searchTerm);
    };

    return (
<header>
  <div class="header-text">Musicboxd</div>
  <div class="search-bar">
    <input type="text" placeholder="Search" />
    <button>Search</button>
  </div>
  <div class="navigation">
    <a href="/">Home</a>
    <a href="/create">Create Post</a>
  </div>
</header>

    );
};
export default Header;
