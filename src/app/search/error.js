"use client";

import React from "react";
import { CircularProgress } from "@nextui-org/react";

function Error({ statusCode }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <CircularProgress aria-label="Loading..." />
      <p className="text-red-500 text-lg font-bold text-center m-4">
        
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "Umm this doesnt look right..."}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
