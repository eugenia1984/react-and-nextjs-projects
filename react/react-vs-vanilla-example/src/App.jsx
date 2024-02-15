import { useState } from "react";
import { content } from "./utils/content";
import "./App.css";
import ButtonTab from "./components/ButtonTab";

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react.svg" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <ButtonTab
            activeContentIndex={activeContentIndex}
            setActiveContentIndex={setActiveContentIndex}
            contentIndex={0}
            text="Why React?"
          />
          <ButtonTab
            activeContentIndex={activeContentIndex}
            setActiveContentIndex={setActiveContentIndex}
            contentIndex={1}
            text="Core Features"
          />
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
