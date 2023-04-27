import React from "react";
import Header from "./Header";
import "../styles/Content.css";

const Content = ({ children }) => {
  return (
    <div>
      <div className="fixed-top">
        <Header></Header>
      </div>
      <div className="container container-margin">{children}</div>
    </div>
  );
};

export default Content;
