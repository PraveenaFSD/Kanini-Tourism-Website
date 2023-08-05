import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./ViewItinerary.css";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect,useState } from "react";
import log from '../Images/bech.jpg'

function ViewItinerary() {
    const [tours, setTours] = useState([]);
    const bookNow = (id) => {
             localStorage.setItem("toueId", id)

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
    <div className="main-it">
      <div >      
            <img class="card-img-top main-it-img" src={log} alt="Card image cap"/>
</div>
<br/>
<h3 style={{textAlign:"left"}}>Mahabilliburan Chennai</h3>
<div class="card mb-3" style={{maxWidth:"130%"}}>
 

  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={log} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
    </div>
    </div>

  );
}
export default ViewItinerary;
