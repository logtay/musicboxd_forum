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
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/create">Create Post</Link>
            </div>
            <form className="search-bar" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};
export default Header;
