import { useState } from 'react';
import './App.css';

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ]
];

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
        <button
          className={activeContentIndex === 0 ? "active" : ""}
          onClick={() => setActiveContentIndex(0)}
        >
          Why React?
        </button>
        <button
          className={activeContentIndex === 1 ? "active" : ""}
          onClick={() => setActiveContentIndex(1)}
        >
          Core Features
        </button>
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
  )
}

export default App
