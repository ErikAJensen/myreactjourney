import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Body from "./Body";
import useeffect from "./UseEffect";
import "./Styles/Main.scss";
import "./App.css";

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route patch="/" element={<Body/>}></Route>
      </Routes>
    </Router>


      {Header()}

      {useeffect()}

      {Body()}
    </>
  );
}

export default App;
