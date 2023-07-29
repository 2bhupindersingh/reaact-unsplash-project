import React from "react";
import { MdSunny, MdNightlight } from "react-icons/md";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <>
      <div className="theme-toggle-row text-center pt-3">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? <MdSunny /> : <MdNightlight />}
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
