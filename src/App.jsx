import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <ul className="shoplist">
          <li className="shoplist-item">
            <input className="shoplist-check" checked type="checkbox" />
            <input className="shoplist-input" value={"Chicken"} />
          </li>
          <li className="shoplist-item">
            <input className="shoplist-check" type="checkbox" />
            <input className="shoplist-input" value={"Pasta"} />
          </li>
          <li className="shoplist-item">
            <input className="shoplist-check" type="checkbox" />
            <input className="shoplist-input" value={"Shrooms"} />
          </li>
          <li className="shoplist-item">
            <input className="shoplist-check" type="checkbox" />
            <input className="shoplist-input" placeholder="New..." />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
