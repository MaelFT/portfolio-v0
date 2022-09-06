import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
