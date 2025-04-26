import { useState } from "react";
import "./App.css";
import Flex from "./Components/Flexbox_main_Heading";
import Flexcard from "./Components/Flexcard";
import Flexcard_Container from "./Components/Flexcard_Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-12 pt-10">
      <Flex />
      <Flexcard_Container />
    </div>
  );
}

export default App;

// we use fragemnet only when when we want to group elements when thez are on same upper level.
