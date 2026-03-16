import React from "react";

const Timezone = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-2xl font-bold  mb-4">
      {children}
    </div>
  );
};

export default Timezone;
