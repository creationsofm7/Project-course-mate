"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import All_courses from "../components/all_courses";


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const router = useRouter();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the search term, for example, send it to your API
    console.log(`Searching for: ${searchTerm}`);
    // Inside your component

    // Inside handleSearchSubmit
    router.push("/learn");
  };


  

return (
    <>
        <div className="search-page flex justify-center items-center mt-20">
            <div className="text-center mb-4 w-2/4 ">
                <h1 className="text-8xl font-bold font-urbanist">CourseMate</h1>
                <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center justify-center mt-4"
                >
                    <input
                        type="text"
                        placeholder="Basic Web Programming..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        required
                        className="flex-grow px-2 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full font-urbanist"
                    />
                    
                    
                </form>
            </div>
        </div>
        <h2 className="font-urbanist text-center text-3xl font-medium">Your Courses</h2>

        <All_courses />
    </>
);
};

export default SearchPage;
