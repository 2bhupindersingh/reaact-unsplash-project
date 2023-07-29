import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import GallaryForm from "./components/GallaryForm";
import { Container } from "react-bootstrap";

function App() {
  const { toggleTheme, themeObject, theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: themeObject.bodyBackground,
        color: themeObject.textColor,
      }}
    >
      <Container>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <GallaryForm />
      </Container>
    </div>
  );
}

export default App;
