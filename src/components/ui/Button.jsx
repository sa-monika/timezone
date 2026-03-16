import React, { Children } from "react";

const Button = ({ Children }) => {
  return (
    <div>
      <button className="btn bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-700 text-black">
        {Children}
      </button>
    </div>
  );
};

export default Button;
