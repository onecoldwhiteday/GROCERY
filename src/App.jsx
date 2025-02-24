import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <ul className="shoplist">
          <li>
            <label className="shoplist-item">
              <input className="shoplist-check" checked type="checkbox" />
              <span>Shrooms</span>
            </label>
          </li>
          <li>
            <label className="shoplist-item">
              <input className="shoplist-check" type="checkbox" />
              <span>Chicken</span>
            </label>
          </li>
          <li>
            <label className="shoplist-item">
              <input className="shoplist-check" type="checkbox" />
              <span>Shrooms</span>
            </label>
          </li>
        </ul>
        <input className="shoplist-input" placeholder="New..." />
      </div>
    </div>
  );
}

export default App;
