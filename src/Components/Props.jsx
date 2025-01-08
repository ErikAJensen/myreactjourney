import React from "react";

// Trener på å kode props
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

//Props for
function Teachers(props) {
  return (
    <div className="teachers-card">
      <p>Name: {props.name}</p>
      <p>Age {props.age} </p>
      <p>Pass Exsams {props.isStudentPas ? "Yes" : "No"} </p>
    </div>
  );
}

function Cars(props) {
  return (
    <div className="Car-card">
      <p>Type: {props.type} </p>
      <p>Year: {props.year} </p>
      <p>fuel: {props.fuel} </p>
    </div>
  );
}

// Eksporter komponentene som named exports
export { Student, Teachers, Cars };
