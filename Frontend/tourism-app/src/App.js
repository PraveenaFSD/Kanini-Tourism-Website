
import navbar from "../src/Components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
  
      <BrowserRouter>
        <Routes> <Route path="/*" element={<navbar />} /> </Routes>
      </BrowserRouter>

    
  );
}

export default App;
