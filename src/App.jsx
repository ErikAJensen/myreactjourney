import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./Styles/Main.scss";
import "./App.css";
import { Student, Teachers, Cars, City } from "./Components/Props";
import CarInfo from "./Components/State";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Cliks from "./Components/Click";
import carImagebmw from "./Img/images2123456.jpg";
import fordimg from "./Img/ford.jpg";
import opelimg from "./Img/opel.jpg";
import Haldenimg from "./Img/halden.jpg";

function StudentsPage() {
  return (
    <div>
      <h1>Students</h1>
      <Student name="Erik" lastname="Aas" age={25} isStudent="Yes" />
      <Student name="Bjørn" lastname="Jensen" age={40} isStudent="No" />
      <Student name="Paul" age={30} isStudent="No" />
    </div>
  );
}

function CarPage() {
  return (
    <div>
      <h1>Cars</h1>
      <Cars
        type="Ford"
        year={2012}
        fuel="Diesel"
        Numberplates="5-12097D"
        carimg={fordimg}
      />

      <Cars
        type="BWM"
        year={2017}
        fuel="EL"
        Numberplates="FRQ 831"
        carimg={carImagebmw} // Send bildet som en prop
      />

      <Cars
        type="Opel"
        year={2005}
        fuel="gasoline "
        carimg={opelimg}
        Numberplates="MRPL8S"
      />
    </div>
  );
}

function Teacher() {
  return (
    <div>
      <h1>Teacher</h1>
      <Teachers name="Bernt" age={40} />
      <Teachers name="Nathalie" age={25} isStudentPas="Yes" />
    </div>
  );
}

function Citys() {
  return (
    <div>
      <h1>City</h1>
      <City Cityimg={Haldenimg} Cityname="Halden" population={31730} />
    </div>
  );
}

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
