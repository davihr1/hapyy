import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";


import { Home } from "./page/Home";
import { Layout } from "./Layout";
import { Projects } from "./page/Projects";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Projects />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
