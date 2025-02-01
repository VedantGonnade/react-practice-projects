import React from "react";
import ReactDom from "react-dom/client";

export const Greeting = () => {
  return (
    <>
      <h2 id="id" className="class">
        My React
      </h2>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Greeting />);
