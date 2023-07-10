import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";


import { Home } from "./page/Home";
import { Layout } from "./Layout";
import { Projects } from "./page/Projects";
import { Atmverified } from "./page/Averified";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Projects />} />
        <Route path="/verified" element={<Atmverified />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
