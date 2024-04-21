"use client";

import React from "react";
import { CircularProgress } from "@nextui-org/react";

function Error({ statusCode }) {
  return (
    <p className="text-red-500 text-lg font-bold text-center">
      <CircularProgress aria-label="Loading..." />
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
