import React from "react";
import Summary from "./pages/Summary";
import Gabby from "./pages/Gabby";
import VA from "./pages/VA";
import RPA from "./pages/RPA";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Link to={"/"}>Platform Summary</Link>
        <Link to={"/gabby"}>Gabby Summary</Link>
        <Link to={"/voice"}>Voice Analytics Summary</Link>
        <Link to={"/rpa"}>RPA Summary</Link>
      </div>
      <Routes>
        <Route path="/" element={<Summary />}></Route>
        <Route path="/gabby" element={<Gabby />}></Route>
        <Route path="/voice" element={<VA />}></Route>
        <Route path="/rpa" element={<RPA />}></Route>
      </Routes>
    </div>
  );
}
