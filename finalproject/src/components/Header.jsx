import React, { useState, useEffect } from "react";
import { FaMusic } from 'react-icons/fa';
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
    const [input, setInput] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = input.trim();

        if (searchTerm) {}
            navigate(`/?search=${encodeURIComponent(searchTerm)}`);
            onSearch(searchTerm);
        }
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        if (searchParams.has("search") && location.pathname === "/") {
            setInput(""); 
        }
    }, [searchParams, location]);

    return (
        <header>
            <div className="header-text">
                Musicboxd <FaMusic />
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    name="searchTerm"
                    value={input}
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="navigation">
                <a href="/">Home</a>
                <a href="/create">Create Post</a>
            </div>
        </header>
    );
};

export default Header;
