import { useState } from "react";
import "./App.css";
import Flex from "./Components/Flexbox_main_Heading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-12 pt-10">
      <Flex />
    </div>
  );
}

export default App;

// we use fragemnet only when when we want to group elements when thez are on same upper level.
