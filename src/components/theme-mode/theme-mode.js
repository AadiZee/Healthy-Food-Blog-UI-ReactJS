import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeChanger = ({ themeStyles, theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="p-0"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "10px",
        zIndex: "50",
        width: "auto",
        animation: "fadeIn 1s",
        transition: "bottom	0.25s ease-in-out",
        cursor: "pointer",
      }}
      onClick={() => toggleTheme()}
    >
      <div
        className="d-inline-flex align-items-center justify-content-center"
        style={{
          backgroundColor: themeStyles.primaryColor,
          border: `1px solid ${themeStyles.secondaryColor}`,
          padding: "9px",
          borderRadius: "100%",
        }}
      >
        {theme === "light" ? (
          <IoSunny
            className=""
            style={{
              height: "29px",
              width: "30px",
              overflow: "hidden",
              color: themeStyles.secondaryColor,
            }}
          />
        ) : (
          <IoMoon
            className=""
            style={{
              height: "29px",
              width: "30px",
              color: themeStyles.secondaryColor,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;
