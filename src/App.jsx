import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import useeffect from "./Components/UseEffect";
import "./Styles/Main.scss";
import "./App.css";

function App() {
  return (
    <>
      {Header()}

      {useeffect()}

      {Body()}
    </>
  );
}

export default App;
