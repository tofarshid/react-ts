import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/layout";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  </BrowserRouter>
);
export default App;
