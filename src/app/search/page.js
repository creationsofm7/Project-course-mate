"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const router = useRouter();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the search term, for example, send it to your API
    // Inside your component

    // Inside handleSearchSubmit
    router.push("/search/learn/" + searchTerm);
  };

return (
    <>
        <div className="search-page flex justify-center items-center mt-20 ">
            <div className="text-center mb-4 w-full lg:w-2/3 ">
                <h1 className="text-5xl text-center font-bold font-urbanist md:text-4xl lg:text-8xl sm:text-4xl">CourseMate</h1>
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
                        
                        className="flex-grow px-2 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full font-urbanist m-3"
                    />
                </form>
            </div>
        </div>
        <h2 className="font-urbanist text-center text-3xl font-medium">
            Your Courses
        </h2>
        <div >
            <All_courses />
        </div>
    </>
);
};

export default SearchPage;

function All_courses() {
  const router = useRouter();

 

  const [list, setList] = useState([]);

  async function fetchPeople() {
    fetch("https://course-mate-test-backend.onrender.com/course")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {list.map((item, index) => (
        <div
          key={index}
          className="bg-white hover:bg-black hover:text-white shadow-lg rounded-lg p-4 text-justify m-2 cursor-pointer transition-all duration-40 ease-in-out"
          onClick={() => {
            router.push(`/search/learn/${item.course_code}`);
          }}
        >
          <h2 className="text-xl font-medium t">{item.course_name}</h2>
          <p className="text-sm text-gray-500 mt-4">{item.course_code}</p>
          <div className="mt-8">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
