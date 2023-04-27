import React from "react";
import Header from "./Header";

const Content = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="container" style={{ marginTop: "80px" }}>
        {children}
      </div>
    </div>
  );
};

export default Content;
