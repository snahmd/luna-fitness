import { useState } from "react";
import "./App.css";
import Navbar from "./screen/Navbar";

function App() {
  // create selectedPage state with type SelectedPage and setSelectedPage function
  const [selectedPage, setSelectedPage] = useState("Home");
  return (
    <>
      <div>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
