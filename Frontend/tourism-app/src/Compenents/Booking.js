import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcDisapprove } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import log from "../Images/bech.jpg";
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";

import mock from "../Images/Bookin3.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";

import ClipLoader from "react-spinners/ClipLoader";
import "./Booking.css";
function Booking() {
    const [selectedRow, setSelectedRow] = useState(null);

  const handleCheckboxChange = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }
  };
    const [booking, setBooking] = useState({
        tourDescription: "11",
       
      
        tourItinerary: [
          {
            dayNo: 1,
            locationName: "fes",
            locationDescription: "sfd",
            arivalTime: "",
            depatureTime: "",
            destinationImage: "3d",
            destinationActivity: "dss"
          }
        ]
      });
  const [tourDates, SetTourDates] = useState([]);
  const [tour, SetTour] = useState([]);
  const [user, setUser] = useState({
    id: "13",
  });
  useEffect(() => {
    fetch("http://localhost:5128/api/Tour/GetTourPackageAsData", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, user: {} }),
    })
      .then(async (res) => {
        var myDataa = await res.json();
        SetTour(myDataa);
        SetTourDates(myDataa.tourDates);
        console.log(myDataa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDeleteEntry = (index) => {
    const updatedAdds = [...passenger];
    console.log(index);
    updatedAdds.splice(index, 1);
    setPassenger(updatedAdds);
    // setTourData((prevTourData) => ({
    //   ...prevTourData,
    //   tourItinerary: updatedAdds,
    // }));
  };
  const handleAddChange = (index, field, value) => {
    const updatedAdds = [...passenger];
    updatedAdds[index][field] = value;
    setPassenger(updatedAdds);
    console.log(passenger);
    // setTourData((prevTourData) => ({
    //   ...prevTourData,
    //   tourItinerary: updatedAdds,
    // }));
  };
  const handleAddEntry = () => {
    setPassenger([
      ...passenger,
      {
        name: "",
        age: "",
        gender: "",
        phoneNumber: "",
      },
    ]);
    console.log(passenger);
  };
  const [passenger, setPassenger] = useState([
    {
      name: "",
      age: "",
      gender: "",
      phoneNumber: "",
    },
  ]);

  return (
    <div className="main-">
      <img class="card-img-top main-it-img" src={log} alt="Card image cap" />
      <br />
      <div class="main">
        <ul class="cards ">
          <li class="cards_item" id="item_salad">
            <div class="card-booking">
              <div class="card_price">${tour.tourPrice}</div>
              <div class="card_image">
                <img src={mock} alt="mixed vegetable salad in a mason jar. " />
              </div>
              <div class="card_content">
                <h2 class="card_title">{tour.tourDescription}</h2>
                <div class="card_text">
                  <p>Number of Days {tour.noOfDays}</p>
                  <p>Number of Nights {tour.noOfNights}</p>
                  <p>Maximum People {tour.maxCapacity}</p>

                  <div>
                    <h3> Available Dates</h3>
                  </div>

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Select Date </th>

                      </tr>
                    </thead>
                    {tourDates.map((u, index) => (
                      <tbody>
                        <tr key={index}>
                          <td>
                            {" "}
                            {new Date(u.startDate).toLocaleDateString(
                              undefined,
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </td>
                          <td>
                            {" "}
                            {new Date(u.endDate).toLocaleDateString(undefined, {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </td>
                          <td>
                           <input type="checkbox"
                           checked={selectedRow === index}
                           onChange={() => handleCheckboxChange(index)}/>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="card">
        <div class="card-body py-5 px-md-5">
          <div>
            <div class="form-outline mb-4"></div>
            <h5>Travelers</h5> <br />
            {passenger.map((data, index) => (
              <div key={index}>
                <div className="row text-start">
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Name"
                      id={`name-${index}`}
                      value={data.name}
                      onChange={(e) =>
                        handleAddChange(index, "name", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Age"
                      id={`age-${index}`}
                      value={data.age}
                      onChange={(e) =>
                        handleAddChange(index, "age", e.target.value)
                      }
                    />
                  </div>

                  {/* Add other fields for location name, description, activities, arrivalTime, departureTime, and image here */}
                  {/* Remember to bind these inputs to the respective properties in the itineraryData state */}
                </div>
                <br />
                <div className="row text-start">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gender"
                      id={`gender-${index}`}
                      value={data.gender}
                      onChange={(e) =>
                        handleAddChange(index, "gender", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      id={`phoneNumber-${index}`}
                      value={data.phoneNumber}
                      onChange={(e) =>
                        handleAddChange(index, "phoneNumber", e.target.value)
                      }
                    />
                  </div>
                </div>
                <br />

                <div className="col-md-12">
                  <i
                    onClick={() => handleDeleteEntry(index)}
                    className="loan-search-icon"
                    style={{ cursor: "pointer" }}
                  >
                    <AiOutlineCloseCircle />
                  </i>
                </div>
              </div>
            ))}{" "}
            <h6>
              <button onClick={() => handleAddEntry()}>+</button>
            </h6><div className="col-md-12">Payment</div>
      <div className="col-md-12">Accepted Cards</div>
      
      <div className="row">
      <div className="col-md-2">
      </div>
         <div className="col-md-2">
        <img class="" src={card1} alt="Card image cap" />
      </div>
      <div className="col-md-2">
        <img class="" src={card2} alt="Card image cap" />
      </div>  <div className="col-md-2">
        <img class="" src={card3} alt="Card image cap" />
      </div>  <div className="col-md-2">
        <img class="" src={card1} alt="Card image cap" />
      </div></div><br/>
      <div className="row">
      <div className="col-md-6">
      <input
                      type="text"
                      className="form-control"
                      placeholder="Name on Card"
                    
                    />
      </div>
         <div className="col-md-6">
         <input
                      type="text"
                      className="form-control"
                      placeholder="Credit Card Number"
                     
                    />
      </div>
    </div><br/><h2>Total Amount $ {tour.tourPrice*passenger.length-1}</h2>
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4 col-md-12"
            >
              Pay Now{" "}
            </button>
          </div>
        </div>
      </div>{" "}
      
    </div>
  );
}

export default Booking;
