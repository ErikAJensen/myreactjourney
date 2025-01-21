import React from "react";

//øver på props
function Student(props) {
  return (
    <div className="student-card">
      <p>Name: {props.name}</p>
      <p>Last Name: {props.lastname}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

//øver på props
function Teachers(props) {
  return (
    <div className="teachers-card">
      <p>Name: {props.name}</p>
      <p>Age {props.age} </p>
      <p>Pass Exsams {props.isStudentPas ? "Yes" : "No"} </p>
    </div>
  );
}

//øver på props
function Cars(props) {
  return (
    <div className="Car-card">
      <img
        src={props.carimg}
        alt="Car"
        style={{ width: "100%", height: "auto" }}
      />
      <p>Type: {props.type} </p>
      <p>Year: {props.year} </p>
      <p>fuel: {props.fuel} </p>
      <p>Number plates: {props.Numberplates}</p>
    </div>
  );
}

function City(props) {
  return (
    <div className="City-card">
      <img src={props.Cityimg} style={{ width: "100%", height: "auto" }} />
      <p>City {props.Cityname} </p>
      <p>population {props.population} </p>
    </div>
  );
}

// Eksporter komponentene som named exports
export { Student, Teachers, Cars, City };
