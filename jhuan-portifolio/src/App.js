import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Content, Home } from "./components/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
