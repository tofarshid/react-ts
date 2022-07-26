import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../pages/layout";
import logo from "./logo.svg";
import "./App.css";
import UseHooks from "../../pages/useHooks";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UseHooks />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
