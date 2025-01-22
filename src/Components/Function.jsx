import { Student, Teachers, Cars, City } from "./Props";
import React from "react";
import carImagebmw from "../Img/images2123456.jpg";
import fordimg from "../Img/ford.jpg";
import opelimg from "../Img/opel.jpg";
import Haldenimg from "../Img/halden.jpg";

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

export { Citys, Teacher, CarPage, StudentsPage };
