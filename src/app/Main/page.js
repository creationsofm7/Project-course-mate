"use client";

import React from "react";
import Primary from "../components/videodash/Primary";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { createContext, useContext } from "react";

export const Videocontext = createContext(null);
export const Coursecontext = createContext(null);
//ADD cant add two same name courses option okay?
function Page() {
  const [coursecode, setCourseCode] = useState("ML101");
  const [src, setSrc] = useState("https://www.youtube.com/watch?v=Z2N5a7XZWg8");

  return (
    <Coursecontext.Provider value={[coursecode, setCourseCode]}>
      <Videocontext.Provider value={[src, setSrc]}>
        <div className="grid h-screen">
          <div className=" text-center bg-none grid-item ">
            <Embeder source={src} />
            {/* <p className="text-left p-2">
          This is a video dashb
           collection of videos that are
          related to a particular topic. You can add a video to the dashboard
          by clicking the button below.
        </p> */}
            <Textarea
              label="Lecture Notes"
              placeholder="Take Your notes here and we will save them for later."
              className="w-full"
            />
          </div>
          <Primary className="grid-item" />
        </div>
      </Videocontext.Provider>
    </Coursecontext.Provider>
  );
}

export default Page;

//add a coder mode where people can write code which automatically converts the video to a p2p video

function Embeder(props) {
  return (
    <div className="yout">
      <iframe
        className="w-full height"
        allowFullScreen
        rel="0"
        src={convertToEmbedUrl(props.source)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

function convertToEmbedUrl(url) {
  let videoId = "";
  if (url.includes("youtu.be")) {
    videoId = url.split("youtu.be/")[1];
    let slashPosition = videoId.indexOf("/");
    if (slashPosition != -1) {
      videoId = videoId.substring(0, slashPosition);
    }
  } else if (url.includes("youtube.com")) {
    videoId = url.split("v=")[1];
    let ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
  }
  return "https://www.youtube.com/embed/" + videoId;
  
}
