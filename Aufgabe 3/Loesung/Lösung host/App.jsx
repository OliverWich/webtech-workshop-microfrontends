import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Header = React.lazy(() => import("header/Header"));
const Content = React.lazy(() => import("content/Content"));

const App = () => (
  <div>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Content />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
