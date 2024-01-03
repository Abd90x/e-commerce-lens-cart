import useTheme from "../hooks/useTheme";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, { useState } from "react";

const Switcher = () => {
  const [colorTheme, setTheme] = useTheme();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={28}
        />
      </div>
    </>
  );
};
export default Switcher;
