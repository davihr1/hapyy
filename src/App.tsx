import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";


import { Home } from "./page/Home";
import { Projects } from "./page/Projects";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
    );
}

export default App;
