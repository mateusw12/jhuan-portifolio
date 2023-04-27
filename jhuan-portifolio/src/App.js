import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Content } from "./components/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Content>
        <Routes>
          <Route path="/about" element={<About></About>} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
