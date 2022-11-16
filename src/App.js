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
        <div className="title">
          <h2>DASH Utility</h2>
        </div>
        <Link to={"/"} className="sidebarItem">
          Platform Summary
        </Link>
        <Link to={"/gabby"} className="sidebarItem">
          Gabby Summary
        </Link>
        <Link to={"/voice"} className="sidebarItem">
          Voice Analytics Summary
        </Link>
        <Link to={"/rpa"} className="sidebarItem">
          RPA Summary
        </Link>
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
