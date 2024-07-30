import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <section>
        <Left />
      </section>
      <section>
        <Right />
      </section>
    </div>
  );
};

export default App;
