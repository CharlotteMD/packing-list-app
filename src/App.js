import React from "react";
import "./App.css";
import Counter from "./components/questions/Counter";
// import Weather from "./Weather";
import Essentials from "./components/Essentials";

const App = () => {
  return (
    <div className="App">
      <Essentials />
      <Counter />
      {/* <Weather /> */}
    </div>
  );
};

export default App;
