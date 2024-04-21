"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useState, useEffect, useContext } from "react";



export default function All_courses() {
  

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
    <div className="flex flex-row m-2">
      {list.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 text-justify m-2 cursor-pointer"
          onClick={() => {
            router.push(`/learn/${item.course_code}`);
            
          }}
        >
          <h2 className="text-xl font-medium text-black">{item.course_name}</h2>
          <p className="text-sm text-gray-500 mt-4">{item.course_code}</p>
          <div className="mt-8">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
