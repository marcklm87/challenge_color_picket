import React from "react";
import { useContext } from "react";
import { ContainerContext } from "../context/ContainerContext";

function Window() {
  const { selectColor } = useContext(ContainerContext);
  console.log("selectedColor=>", selectColor);
  return (
    <div
      style={{ border:"solid", width: "100px", height: "100px", backgroundColor: selectColor }}
    />
  );
}

export default Window;
