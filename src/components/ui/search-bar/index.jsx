"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [searchedTerm, setSearchedTerm] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    redirect("/search?search=" + searchedTerm);
  }

  return (
    <div className="fixed w-full h-20 bg-[#5E2E53] z-999">
      <form
        onSubmit={handleSearch}
        className="relative z-[999] w-[95%] mx-auto "
      >
        <input
          name="search"
          onChange={(e) => setSearchedTerm(e.target.value)}
          value={searchedTerm}
          type="search"
          className="w-full h-10 bg-[#EAEAEA]/70  text-black px-2 pl-10 "
        />
        <button
          type="submit"
          className="absolute top-1/2 right-12 -translate-y-1/2 text-black"
        >
          <FiSearch className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
