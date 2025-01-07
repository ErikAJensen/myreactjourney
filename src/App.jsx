import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./Styles/Main.scss";
import "./App.css";
import StudentsPage from "./Components/Props";

function App() {
  return (
    <Router>
      <div>
        {Header()}

        <button>
          <Link to="/students">Props</Link>
        </button>

        <Routes>
          <Route path="/students" element={<StudentsPage />} />
        </Routes>

        {Body()}
      </div>
    </Router>
  );
}

export default App;
