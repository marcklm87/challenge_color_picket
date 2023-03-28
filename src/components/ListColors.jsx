import React from "react";
import { useContext, useEffect, useState } from "react";
import ColorSquare from "./ColorSquare";
import { ContainerContext } from "../context/ContainerContext";
function ListColors() {
  const { colors } = useContext(ContainerContext);
  return (
    <div>
      {colors.map((element, index, array) => {
        return (
          <ColorSquare
            key={index}
            number={index}
            code={element.code}
            name={element.name}
          />
        );
      })}
    </div>
  );
}

export default ListColors;
