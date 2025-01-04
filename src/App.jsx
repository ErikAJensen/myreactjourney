import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Body from "./Body";
import "./Styles/Main.scss";
import "./App.css";

function App() {
  return (
    <>
      {Header()}

      {Body()}
    </>
  );
}

export default App;
