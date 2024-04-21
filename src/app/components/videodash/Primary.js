"use client";

import Modalform from "../add_module_form";
import Acco from "./Accordian";
import { Switch } from "@nextui-org/react";
import { useState, useEffect, useContext, createContext } from "react";
import { Coursecontext } from "../../Search/learn/[code]/page";

export const Devcontext = createContext(null);



function Primary() {
  const [list, setList] = useState([]);
  const [devMode, setDevMode] = useState(false);
  const [coursecode, setCourseCode] = useContext(Coursecontext);
  

  async function fetchPeople() {
    fetch("https://course-mate-test-backend.onrender.com/courses/" + coursecode )
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
    <div className="primary bg-black text-white h-screen">
      <h4 className="p-4 select-none">
        <p className="text-gray-500">Course {list.course_code}</p>
        {list.course_name}
        <Switch
          size="sm"
          className="p-1"
          isSelected={devMode}
          onChange={() => setDevMode(!devMode)}
        >
          Developer Mode
        </Switch>
      </h4>
      <Devcontext.Provider value={[devMode, setDevMode]}>
       <Acco />
      </Devcontext.Provider>
      {devMode && <Modalform course_code={coursecode} />}
    </div>
  );
}

export default Primary;
