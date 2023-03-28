import React from "react";
import { createContext, useEffect, useState } from "react";
import { colors as data } from "../colors";

export const ContainerContext = createContext();

export function ContainerContextProvider(props) {
  const [colors, setColors] = useState([]);
  const [selectColor, setSelectColor] = useState("");
  useEffect(() => {
    setColors(data);
  }, []);
  return (
    <ContainerContext.Provider
      value={{
        selectColor,
        colors,
        settingColor: setSelectColor
      }}
    >
      {props.children}
    </ContainerContext.Provider>
  );
}
