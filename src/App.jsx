import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./Styles/Main.scss";
import "./App.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Cliks from "./Components/Click";
import { StudentsPage, CarPage, Teacher, Citys } from "./Components/Function";

function App() {
  return (
    <Router>
      <>
        <Link to="Body" className="link-button">
          Henter Components
        </Link>
      </>

      <>
        <Link to="Cliks" className="link-button">
          Events
        </Link>
      </>
      <div>
        <Link to="students" className="link-button">
          Studenter
        </Link>

        <Link to="Cars" className="link-button">
          Biler
        </Link>

        <Link to="Teachers" className="link-button">
          Lærer
        </Link>

        <Link to="Citys" className="link-button">
          Byer
        </Link>
      </div>

      <Routes>
        <Route path="Body" element={<Body />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="Cars" element={<CarPage />} />
        <Route path="Teachers" element={<Teacher />} />
        <Route path="Citys" element={<Citys />} />
        <Route path="Cliks" element={<Cliks />} />
      </Routes>
    </Router>
  );
}

export default App;
