import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import Modalform from "../add_module_form";
import Topicform from "../add_topic_form";
import { useContext } from "react";
import { Coursecontext, Videocontext } from "../../Main/page";
import { Devcontext } from "./Primary";

export default function Acco(props) {
  const [courseData, setCourseData] = useState(null);
  const [coursecode, setCourseCode] = useContext(Coursecontext);
  const [src, setSrc] = useContext(Videocontext);
  const [devMode, setDevMode] = useContext(Devcontext);

  const deleteTopic = async (topic_name) => {
    const response = await fetch(
      "http://127.0.0.1:8000/courses/" + coursecode +  "/topics/" + topic_name + "/",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic_name: topic_name,
        }),
      }
    );
  };

  const deleteResource= async ([topic_name ,resource_name]) => {
    const response = await fetch(
      "http://127.0.0.1:8000/courses/" + coursecode +  "/topics/" + topic_name + "/resources/" + resource_name + "/",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic_name: topic_name,
        }),
      }
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/courses/" + coursecode + "/topics/"
      ); // Replace with your API endpoint
      const data = await response.json();
      setCourseData(data);
    };

    fetchData();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return loading ? (
    <div className="text-center">Loading...</div>
  ) : (
    courseData ? (
      <Accordion variant="shadow" className="acco bg-black text-white ">
        {courseData.topics.map((topic) => (
          <AccordionItem
            //insert one dropdown icon in indicator field
              className="text-white"
              title={topic.topic_name}
            >
              <h4 className="text-xs p-1 flex justify-between">
              {topic.description}{" "}
              {devMode && <button
                className="bg-red-500 text-white p-1 rounded-md "
                onClick={() => {
                  deleteTopic(topic.topic_name);
                  window.location.reload();
                }}
              >
                DELETE
              </button>}
            </h4>

            {topic.resources.map((resource) => (
              <Card className="bg-gray-900 w-90 h-18 rounded-sm m-1 font-light text-small">
                <CardBody>
                  <div className="grid-2 rounded-none" onClick={(e) => {setSrc(resource.link)  }}>
                    {/* <img src="https://via.placeholder.com/75x50" alt="image" /> */}
                    {resource.title}
                    {devMode && <button
                className=" text-white p-1 rounded-md "
                onClick={() => {
                  deleteResource([topic.topic_name, resource.title]);
                  window.location.reload();
                }}
              >
                X
              </button>}
                    
                  </div>
                  
                </CardBody>
                {/* <CardFooter className="text-sm">Link: {resource.link}</CardFooter> */}
              </Card>
            ))}
            {topic.assignments.map((quiz) => (
              <Card className="bg-gray-900 w-90 h-18 rounded-none m-1 font-light text-small">
                <CardBody>
                  <div className="grid-2" onClick={() => { /* Add your onClick handler here */ }}>
                    <img src="https://via.placeholder.com/75x50" alt="image" />
                    {quiz.title}
                  </div>
                </CardBody>
                <CardFooter className="text-sm">Due: {quiz.due_date}</CardFooter>
              </Card>
            ))}
            {devMode && <Topicform topicname={topic.topic_name.toString()} course_code={coursecode.toString()} />}
          </AccordionItem>
        ))}
      </Accordion>
    ) : (
      <div className="text-center">There seems to be a network error!</div>
    )
  );
}