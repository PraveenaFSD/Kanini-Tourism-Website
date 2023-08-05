import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./ViewTour.css";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect,useState } from "react";
import log from '../Images/bech.jpg'

function ViewTour() {
    const navigate = useNavigate();

    const [tours, setTours] = useState([]);
    const bookNow = (id) => {
             localStorage.setItem("tourId", id)
             navigate("/viewItinerary");

      };
    useEffect(() => {
        fetch("http://localhost:5128/api/Tour/GetAllTourPackage", {
          method: "GET",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
        })
          .then(async (res) => {
            var myDataa = await res.json();
            setTours(myDataa);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  return (
    <div className="main-tour">
        <div class="main">
     <div class="container-expand-lg">

<div class="card-deck row">


{tours.map((u) => (<div class="col-xs-12 col-sm-6 col-md-4">
  <div class="card mb-4">

    <div class="view overlay">
      <img class="card-img-top" src={log} alt="Card image cap"/>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

      <h4 class="card-title">{u.tourDescription}</h4>
      <p  style={{textAlign:"left",color:"grey"}}>Some quick example tdsscscscext to build on the card title and make up the bulk of the card's content.</p>
      <hr/>From  <span className="money">${u.tourPrice}</span><hr/>
      <button type="button"  id="book-btn" 
                            onClick={() => bookNow(u.tourId)}>

        Book Now</button>

    </div>

  </div>
</div>
))}


 





  
</div>
  
</div>
    </div>
    </div>
    
  );
}
export default ViewTour;
