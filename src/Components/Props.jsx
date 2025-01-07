import React from "react";

function Student(props) {
  return (
    <div className="student-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

function StudentsPage() {
  return (
    <div>
      <h1>Students</h1>
      <Student name="Erik" age={25} isStudent="Yes" />
      <Student name="Bjørn" age={40} isStudent="No" />
    </div>
  );
}

export default StudentsPage;
