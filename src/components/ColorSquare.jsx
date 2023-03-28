import React from "react";
import { useContext } from "react";
import { ContainerContext } from "../context/ContainerContext";
function ColorSquare({ number, name, code }) {
  const { settingColor } = useContext(ContainerContext);
  const asignarColor = () => {
    settingColor(code);
  };
  return (
    <p onClick={asignarColor} style={{ color: code }} id={number}>
      {name}
    </p>
  );
}

export default ColorSquare;
