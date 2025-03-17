import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  // console.log("hej");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}></button>
      <h2>{count}</h2>
      <h1>Im built</h1>
    </div>
  );
};
root.render(<App />);
