import React from "react";
import { useParams } from "react-router-dom";

const Resume = () => {
  const { id } = useParams();

  console.log("===id===", id);
  return <div className="h-[calc(100vh-95px)]"></div>;
};

export default Resume;
