import React, { useState } from "react";

function CarInfo(props) {
  const [car, setCar] = useState({
    type: props.type || "",
  });
}

export default CarInfo;
