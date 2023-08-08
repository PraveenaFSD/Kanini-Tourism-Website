import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../src/Compenents/Menu";
import TravelerRegister from "./Compenents/TravelerRegister";
import ChooseRegister from "../src/Compenents/ChooseRegister";
import AgentRegister from "../src/Compenents/AgentRegister";
import Login from "../src/Compenents/Login"
import Roughtfil from "./Compenents/roughtfil"
import ViewTour from "./Compenents/ViewTour"
import ViewItinerary from "./Compenents/ViewItinerary"


import TourRegistartion from "../src/Compenents/TourRegistration";


// import Modal from "react-bootstrap/Modal";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UploadImage from "./Compenents/UploadImage";
import GetAllAgents from "./Compenents/GetAllAgents";
import DeleteAlert from "./Compenents/DeleteAlert";
import BookedAlert from "./Compenents/BookedAlert";
import Booking from "./Compenents/Booking";
import MainMenu from "./Compenents/MainMenu";
import AdminNav from "./Compenents/AdminNav";

import AgentNav from "./Compenents/AgentNav";
import TravelerNav from "./Compenents/TravelerNav";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agentregister" element={<AgentRegister />} />
          <Route path="/travelerregister" element={<TravelerRegister />} />
          <Route path="/chooseregister" element={<ChooseRegister />} />
          <Route path="/tourregistartion" element={<TourRegistartion />} />
          <Route path="/roughtfil" element={<Roughtfil />} />
          <Route path="/uploadimage" element={<UploadImage />} />
          <Route path="/getallagents" element={<GetAllAgents />} />
          <Route path="/deletealert" element={<DeleteAlert />} />
          <Route path="/bookedalert" element={<BookedAlert />} />
          <Route path="/viewTour" element={<ViewTour />} />
          <Route path="/viewItinerary" element={<ViewItinerary />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/adminnav" element={<AdminNav />}/>
          <Route path="/agentnav" element={<AgentNav />}/>
          <Route path="/travelernav" element={<TravelerNav />}/>





          




          




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
