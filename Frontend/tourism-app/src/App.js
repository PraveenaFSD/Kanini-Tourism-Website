import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../src/Compenents/Menu";
import TravelerRegister from "./Compenents/TravelerRegister";
import ChooseRegister from "../src/Compenents/ChooseRegister";
import AgentRegister from "../src/Compenents/AgentRegister";
import Login from "../src/Compenents/Login"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agentregister" element={<AgentRegister />} />
          <Route path="/travelerregister" element={<TravelerRegister />} />
          <Route path="/chooseregister" element={<ChooseRegister />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
