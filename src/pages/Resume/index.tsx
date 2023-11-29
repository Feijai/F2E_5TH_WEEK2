import React from "react";
import { useParams } from "react-router-dom";
import CandidateComponent from "./CandidateComponent";

const Resume = () => {
  const { id } = useParams();

  return (
    <div className="h-[calc(100vh-95px)] flex gap-[20px]">
      <CandidateComponent id={id as string} />
    </div>
  );
};

export default Resume;
