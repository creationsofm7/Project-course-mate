import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Topicform from "../../../../components/add_topic_form";
import { useContext } from "react";
import { Coursecontext, Videocontext } from "../page";
import { Devcontext } from "./Primary";

export default function Acco() {
  const [courseData, setCourseData] = useState(null);
  const [coursecode, setCourseCode] = useContext(Coursecontext);
  const [src, setSrc] = useContext(Videocontext);
  const [devMode, setDevMode] = useContext(Devcontext);

  const deleteTopic = async (topic_name) => {
    const response = await fetch(
      "https://course-mate-test-backend.onrender.com/courses/" +
        coursecode +
        "/topics/" +
        topic_name +
        "/",
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

  const deleteResource = async ([topic_name, resource_name]) => {
    const response = await fetch(
      "https://course-mate-test-backend.onrender.com/courses/" +
        coursecode +
        "/topics/" +
        topic_name +
        "/resources/" +
        resource_name,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic_name: topic_name,
          resource_name: resource_name,
        }),
      }
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://course-mate-test-backend.onrender.com/courses/" +
          coursecode +
          "/topics/"
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
  ) : courseData ? (
    <Accordion variant="shadow" className="bg-black text-white cursor-pointer ">
      {courseData.topics.map((topic) => (
        <AccordionItem
          key={topic.topic_name}
          //insert one dropdown icon in indicator field
          className="text-2xl font-semibold text-white mb-2"
          title={topic.topic_name}
        >
          <h4 className="text-gray-300 mb-4 text-sm">
            {topic.description}{" "}
            {devMode && (
              <button
                className="text-red-500 hover:text-red-700 mb-4"
                onClick={() => {
                  deleteTopic(topic.topic_name);
                  window.location.reload();
                }}
              >
                DELETE TOPIC
              </button>
            )}
          </h4>

          {topic.resources.map((resource) => (
            <Card
              className=" flex justify-between bg-gray-800 p-0 mt-2 rounded-lg shadow-md cursor-pointer"
              key={resource.title}
            >
              <CardBody className="flex-1">
                <div
                  className="grid-2 rounded-none"
                  onClick={(e) => {
                    setSrc(resource.link);
                  }}
                >
                  {/* <img src="https://via.placeholder.com/75x50" alt="image" /> */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {resource.title}
                  </h3>

                  {devMode && (
                    <button
                      className=" text-red-500 hover:text-red-700 mb-2 text-right static text-base"
                      onClick={() => {
                        deleteResource([topic.topic_name, resource.title]);
                        setTimeout(() => {
                          window.location.reload();
                        }, 1000);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </CardBody>
              {/* <CardFooter className="text-sm">Link: {resource.link}</CardFooter> */}
            </Card>
          ))}
          {topic.assignments.map((quiz) => (
            <Card
              className="flex items-center bg-gray-800 p-0 rounded-lg shadow-inner cursor-pointer mt-2 "
              key={quiz.title}
            >
              <CardBody>
                <div>
                  {/* <img src="https://via.placeholder.com/75x50" alt="image" /> */}
                  <h3 className="text-lg font-medium text-white">
                    {quiz.title}
                  </h3>
                </div>
              </CardBody>
              <CardFooter className="text-gray-100 text-sm">
                Due: {quiz.due_date}
              </CardFooter>
            </Card>
          ))}
          {devMode && (
            <Topicform
              topicname={topic.topic_name.toString()}
              className="bg-black"
              
              course_code={coursecode.toString()}
            />
          )}
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <div className="text-center">There seems to be a network error!</div>
  );
}
