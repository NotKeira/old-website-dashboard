import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Bored? Press me. {count}
        </button>
      </div>
    </div>
  );
}

export default App;
