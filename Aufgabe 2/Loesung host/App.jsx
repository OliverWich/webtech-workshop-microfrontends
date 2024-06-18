import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "header/Header";
import Content from "content/Content";

const App = () => (
  <div>
    <Header />
    <Content />
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
