import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// Nutze Lazy Loading für die Komponenten Header und Content anstatt sie direkt zu importieren
import Header from "header/Header";
import Content from "content/Content";

const App = () => (
  // Füge ein Suspense-Element um die Komponenten Header und Content hinzu
  <>
    <Header />
    <Content />
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
