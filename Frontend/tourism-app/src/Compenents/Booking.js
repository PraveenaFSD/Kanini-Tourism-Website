import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcDisapprove } from "react-icons/fc";
import "./ViewItinerary.css";
import { FcApproval } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import log from "../Images/bech.jpg";
import ClipLoader from "react-spinners/ClipLoader";

function Booking() {
const[tourDates,SetTourDates]=useState();
const[tour,SetTour]=useState();

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
            SetTourDates(myDataa.tourDates);
            SetTour(myDataa);
            console.log(tourDates);

          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


  return (
    <div className="main-it">
      <img class="card-img-top main-it-img" src={log} alt="Card image cap" />
      <br />
      <div><h1>{tour.tourDescription}</h1></div>
      <div><h1>{tour.noOfDays}</h1></div>


      {tourDates.map((u) => (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{u.}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      </table>
            ))}
     
    </div>
  );
}

export default Booking;
