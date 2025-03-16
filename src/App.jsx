import React from "react";
import "./App.css";

import Groom from "./assets/groom.webp";
import Bride from "./assets/bride.webp";

import Home from "./components/WeddingPage/index.jsx";
import Panels from "./components/Panels/index.jsx";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-4 ">
      <Panels imagePath={Groom} />
      <div className="col-span-2 flex flex-col items-center justify-center">
        <Home />
      </div>
      <Panels imagePath={Bride} />
    </div>
  );
}

export default App;
