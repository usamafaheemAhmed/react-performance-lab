import React from "react";
import parse from "html-react-parser";

const ProblemHOC = ({ item }) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12">
        <div className="bg-card rounded-lg border p-4">
          {parse(item.ProblemQuestion)}
        </div>
      </div>
      <div className="col-span-12 p-0">
        <div>{item.component}</div>
      </div>
    </div>
  );
};

export default ProblemHOC;
