import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./Styles/Main.scss";
import "./App.css";
import { Student, Teachers } from "./Components/Props";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div>
          <h1>Props</h1>

          <h1>Students</h1>
          <Student name="Erik" lastname="Aas" age={25} isStudent="Yes" />
          <Student name="Bjørn" lastname="Jensen" age={40} isStudent="No" />
          <Student name="Paul" age={30} isStudent="No" />

          <h1>Teacher</h1>
          <Teachers name="Bernt" age={40} />
          <Teachers name="Nathalie" age={25} isStudentPas="Yes" />
        </div>

        <Body />
      </div>
    </Router>
  );
}

export default App;
