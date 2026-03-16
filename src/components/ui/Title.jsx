import React from "react";

const Title = ({ children }) => {
  return (
    <div className="p-4">
      <h2 className="text-5xl font-bold text-center ">{children}</h2>
    </div>
  );
};

export default Title;
