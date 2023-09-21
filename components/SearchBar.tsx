"use client";

import { useState } from "react";
import { SearchManuFacturer } from "./SearchManuFacturer";

export const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState("");
    const handleSearch = () => {};

    return (
        <form action="" className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManuFacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer} />
            </div>
        </form>
    );
};
