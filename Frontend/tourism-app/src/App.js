import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../src/Compenents/Menu";
import TravelerRegister from "./Compenents/TravelerRegister";
import ChooseRegister from "../src/Compenents/ChooseRegister";
import AgentRegister from "../src/Compenents/AgentRegister";
import Login from "../src/Compenents/Login"
import Roughtfil from "./Compenents/roughtfil"

import TourRegistartion from "../src/Compenents/TourRegistration";




import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UploadImage from "./Compenents/UploadImage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadImage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agentregister" element={<AgentRegister />} />
          <Route path="/travelerregister" element={<TravelerRegister />} />
          <Route path="/chooseregister" element={<ChooseRegister />} />
          <Route path="/tourregistartion" element={<TourRegistartion />} />
          <Route path="/roughtfil" element={<Roughtfil />} />
          <Route path="/uploadimage" element={<UploadImage />} />

          




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
