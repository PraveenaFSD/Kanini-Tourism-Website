import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import "./ViewItinerary.css";
import { FcApproval } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import log from "../Images/bech.jpg";

function ViewItinerary() {
  const [itinerary, setItinerary] = useState([]);
  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);

  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState({
    id: "",
  });
  const [activeButton, setActiveButton] = useState("button1"); // Default active button

  const handleButtonClick = (buttonId) => {
    setIsActive(true);
    setActiveButton(buttonId);
  };

  useEffect(() => {
    const token = localStorage.getItem("tourId");
    user.id = token;
    console.log(token);
    console.log(user);

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
        setItinerary(myDataa.tourItinerary);
        setInclusions(myDataa.tourInclusions);
        setExclusions(myDataa.tourExclusions);
        console.log(myDataa.status);
        console.log(inclusions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-it">
      <img class="card-img-top main-it-img" src={log} alt="Card image cap" />
      <br />
      <h3 style={{ textAlign: "left" }}>Mahabilliburan Chennai</h3>
      <div>
        <div className="button-container">
          <button
            onClick={() => handleButtonClick("button1")}
            className={activeButton === "button1" ? "active-button" : ""}
          >
            Itinerary{" "}
          </button>
          <button
            onClick={() => handleButtonClick("button2")}
            className={activeButton === "button2" ? "active-button" : ""}
          >
            Inclusions
          </button>
          <button
            onClick={() => handleButtonClick("button3")}
            className={activeButton === "button3" ? "active-button" : ""}
          >
            Exclusions
          </button>
          <button
            onClick={() => handleButtonClick("button4")}
            className={activeButton === "button4" ? "active-button" : ""}
          >
            Policies{" "}
          </button>
        </div>

        {activeButton === "button1" && (
          <div>
            {" "}
            {itinerary.map((u) => (
              <div>
                <div class="card mb-3" style={{ maxWidth: "130%" }}>
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src={log} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          {u.tourDestinationId + "0o0"}
                        </h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeButton === "button2" && (
          <div>
            {inclusions.map((u) => (
              <div className="inclusions-text">
                <br />

                <i>
                  <FcApproval />
                  &nbsp;{u}
                </i>
              </div>
            ))}
          </div>
        )}
        {activeButton === "button3" && <div> {exclusions.map((u) => (
              <div className="exclusions-text">
                <br />

                <i>
                  <MdOutlineCancelPresentation />
                  &nbsp;{u}
                </i>
              </div>
            ))}</div>}
        {activeButton === "button4" && (
          <div className="button3-text">
            <div>
              <br />
              <h2 style={{ fontWeight: "bold" }}>
                {" "}
                Cancellation & Date Change
              </h2>
              <br />
              <div className="main-policy">Package Cancellation Policy</div>

              <div className="sub-policy">
                {" "}
                Cancellation possible till one week before
              </div>
              <div className="">
                {" "}
                After that package is{" "}
                <span style={{ color: "grey", fontWeight: "bold" }}>
                  not-refundable
                </span>{" "}
              </div>
              <br />
              <ul class="bullet-list">
                <li>
                  These are non-refundable amounts as per the current components
                  attached. In the case of component change/modifications, the
                  policy will change accordingly.
                </li>
                <li>
                  Please check the exact cancellation and date change policy on
                  the review page before proceeding further.
                </li>
                <li>
                  Please check the exact cancellation and date change policy on
                  the review page before proceeding further.
                </li>
                <li>
                  Cancellation charges shown is exclusive of all taxes and taxes
                  will be added as per applicable.
                </li>
              </ul>

              <div className="main-policy">Package Date Change Policy</div>

              <div className="sub-policy">
                {" "}
                Cancellation possible till one week before
              </div>
              <div className="">
                {" "}
                <span style={{ color: "grey", fontWeight: "bold" }}>
                  {" "}
                  After that package data cannot be changed
                </span>{" "}
              </div>
              <br />
              <ul class="bullet-list">
                <li>
                  These are non-refundable amounts as per the current components
                  attached. In the case of component change/modifications, the
                  policy will change accordingly.
                </li>
                <li>
                  Please check the exact cancellation and date change policy on
                  the review page before proceeding further.
                </li>
                <li>
                  Date Change fees don't include any fare change in the
                  components on the new date. Fare difference as applicable will
                  be charged separately.
                </li>
                <li>
                  Date Change will depend on the availability of the components
                  on the new requested date.
                </li>
                <li>
                  Please note, TCS once collected cannot be refunded in case of
                  any cancellation / modification. You can claim the TCS amount
                  as adjustment against Income Tax payable at the time of filing
                  the return of income.
                </li>
                <li>
                  Cancellation charges shown is exclusive of all taxes and taxes
                  will be added as per applicable.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewItinerary;
