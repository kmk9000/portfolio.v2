import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import theme from "./theme.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex bg-blue-300 min-h-screen min-w-full">
      <Header />
      <Main />
    </div>
  );
}

export default App;
