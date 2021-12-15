import React from "react";
import PropTypes from "prop-types";

const index = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-200">
      <main className="flex flex-col justify-center items-center text-lg">
        {children}
      </main>
    </div>
  );
};

index.propTypes = {
  children: PropTypes.object.isRequired,
};

export default index;
