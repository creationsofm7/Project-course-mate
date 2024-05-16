"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input, Tooltip } from "@nextui-org/react";
import { SearchIcon } from "./searchicon";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const router = useRouter();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const courseData = {
      course_name: searchTerm.toString(),
      course_code: searchTerm.substring(0, 3).toLocaleUpperCase() + "101",
      instructor: {
        name: "string",
        email: "string",
        office_hours: "string",
      },
      description: "This is an example course",
      learning_objectives: [],
      topics: [],
    };

    const response = await fetch(
      "https://course-mate-test-backend.onrender.com/courses/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      }
    );

    if (response.ok) {
      console.log("Course added successfully");
    } else {
      console.error("Error adding course");
    }

    router.push(
      "/search/learn/" + searchTerm.substring(0, 3).toLocaleUpperCase() + "101"
    );
  };

  return (
    <>
      <div className="search-page flex justify-center items-center mt-20 ">
        <div className="text-center mb-4 w-full lg:w-2/3 ">
          <h1 className="text-5xl text-center font-bold font-urbanist md:text-4xl lg:text-8xl sm:text-4xl">
            CourseMate
          </h1>
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center justify-center mt-4"
          >
            <Input
              type="text"
              placeholder="Basic Web Programming..."
              value={searchTerm}
              onChange={handleSearchChange}
              radius="full"
              startContent={<SearchIcon />}
              isRequired
              variant="bordered"
              size="lg"
              maxLength={69}
              className="pl-8 pr-8"
              endContent={
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-3xl"
                >
                  Learn
                </button>
              }
            />
          </form>
        </div>
      </div>
      <h2 className="font-urbanist text-center text-3xl font-semibold">
        Browse Your Courses
      </h2>
      <div>
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

function Searchfilter() {
  return (
    <div>
      <h1>Searchfilter</h1>
    </div>
  );
}
