import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Content>
        <Routes>
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
