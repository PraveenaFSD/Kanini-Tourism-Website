import Menu from "./Menu";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./TourRegistration.css";
import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function TourRegistration() {
  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  useEffect(() => {}, [inclusions, exclusions]);
  useEffect(() => {
    getTypes();
    getCategories();
    // localStorage.clear();
  }, []);
  var getTypes = () => {
    fetch("http://localhost:5128/api/Tour/GetAllInclusion  ", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then(async (data) => {
        if (data.status == 200) {
          setInclusions([]);
          var mydata = await data.json();
          inclusions.push(mydata);
          setInclusions([...mydata]);
          console.log(inclusions);
        }
      })
      .catch((err) => {
        // setError(err.message);
      });
  };

  var getCategories = () => {
    fetch("http://localhost:5128/api/Tour/GetAllExclusion ", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    })
      .then(async (data) => {
        if (data.status == 200) {
          setExclusions([]);
          var mydata = await data.json();
          exclusions.push(mydata);
          setExclusions([...mydata]);
          console.log(exclusions);
        }
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();
  const [dates, setDates] = useState([{ startDate: "1", endDate: "1" }]);

  const handleAddDate = () => {
    setDates([...dates, { startDate: "", endDate: "" }]);
  };

  const handleDateChange = (index, field, value) => {
    const updatedDates = [...dates];
    updatedDates[index][field] = value;
    setDates(updatedDates);
    console.log(dates);
  };
  const handleDeleteDate = (index) => {
    const updatedDates = [...dates];
    updatedDates.splice(index, 1);
    setDates(updatedDates);
  };
    
  const handleDeleteEntry = (index) => {
    const updatedAdds = [...itineraryData];
    updatedAdds.splice(index, 1);
    setItineraryData(updatedAdds);
    // setItineraryData((prevItineraryData) => {
    //   const updatedItineraryData = [...prevItineraryData];
    //   updatedItineraryData.splice(index, 1);
    //   return updatedItineraryData;
    // });
  };
  const [itineraryData, setItineraryData] = useState([
    {
      dayNo: "",
      locationName: "",
      description: "",
      activities: "",
      arrivalTime: "",
      departureTime: "",
      image: "",
    },
  ]);
  const handleAddEntry = () => {
    setItineraryData([
      ...itineraryData,
      {
        dayNo: "",
        locationName: "",
        description: "",
        activities: "",
        arrivalTime: "",
        departureTime: "",
        image: "",
      },
    ]);
    console.log(itineraryData);

  };
  const handleAddChange = (index, field, value) => {
    const updatedAdds = [...itineraryData];
    updatedAdds[index][field] = value;
    setItineraryData(updatedAdds);
    console.log(itineraryData);
  };

  const [traveler, setTraveler] = useState({
    user: {
      userEmail: "",
    },

    userName: "",
    mobileNumber: "",
    passwordString: "",
  });
  var travelerRegister = () => {
    console.log(traveler);
    fetch("http://localhost:5129/api/User/AddTraveler", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...traveler, traveler: {} }),
    })
      .then(async (res) => {
        var myDataa = await res.json();
        localStorage.setItem("token", myDataa.token);
        localStorage.setItem("role", myDataa.role);
        // localStorage.setItem("userId", myDataa.userId)
        if (res.status == 201) {
          if (myDataa.user.role == "traveler") {
            alert("register was successfull");
            navigate("/chooseRegister");
          } else {
            alert("register was unsuccessfull");
          }
          // else if(myDataa.role=="patient")
          // {
          //   alert("login was successfull")
          //   navigate("/patient");

          // }
          // else if(myDataa.role=="admin"){
          //   navigate("/admin");
          //   alert("login was successfull")

          // }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="main">
      <Menu />
      <div class="container">
        reghhjkj
        <div class="main-login">
          <div class="px-4 py-5 px-md-5 text-center bac">
            <div class="container">
              <div class="row gx-lg-5 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <h1 class="my-5 display-3 fw-bold ls-tight">
                    The best offer <br />
                    <span class="text-primary">for your holiday trip</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                  </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0 ">
                  <div class="card">
                    <div class="card-body py-5 px-md-5">
                      <div>
                        <div></div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example3">
                            Tour Name Description
                          </label>

                          {/* <input type="text" rows="5" id="form3Example3" class="form-control custom-width" /> */}
                          <textarea
                            class="form-control"
                            rows="3"
                            id="comment"
                          ></textarea>
                        </div>
                        <div class="col-md-12 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example1">
                              State
                            </label>

                            <input
                              type="text"
                              id="form3Example1"
                              class="form-control"
                              onChange={(event) => {
                                setTraveler({
                                  ...traveler,
                                  userName: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-md-12 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example1">
                              Tour Price
                            </label>

                            <input
                              type="number"
                              id="form3Example1"
                              class="form-control"
                              onChange={(event) => {
                                setTraveler({
                                  ...traveler,
                                  userName: event.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>{" "}
                        <h5> Tour Dates</h5> <br />
                        {dates.map((date, index) => (
                          <div className="row" key={index}>
                            <div className="col-md-5">
                              <label
                                className="form-label"
                                htmlFor={`startDate-${index}`}
                              >
                                Start Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id={`startDate-${index}`}
                                value={date.startDate}
                                onChange={(e) =>
                                  handleDateChange(
                                    index,
                                    "startDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-5">
                              <label
                                className="form-label"
                                htmlFor={`endDate-${index}`}
                              >
                                End Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id={`endDate-${index}`}
                                value={date.endDate}
                                onChange={(e) =>
                                  handleDateChange(
                                    index,
                                    "endDate",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-2">
                              <br />

                              {/* "Delete" button to remove the particular date */}
                              <i
                                onClick={() => handleDeleteDate(index)}
                                className="loan-search-icon"
                                style={{ cursor: "pointer" }}
                              >
                                <AiOutlineCloseCircle />
                              </i>
                            </div>
                          </div>
                        ))}
                        <h6>
                          <button onClick={handleAddDate}>+</button>
                        </h6>
                      </div>
                      <br />
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            No Of Days
                          </label>

                          <input
                            type="number"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTraveler({
                                ...traveler,
                                userName: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            No Of Knights
                          </label>

                          <input
                            type="number"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTraveler({
                                ...traveler,
                                userName: event.target.value,
                              });
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            Max Capacity
                          </label>

                          <input
                            type="number"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTraveler({
                                ...traveler,
                                userName: event.target.value,
                              });
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            Minimum Capacity
                          </label>

                          <input
                            type="number"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTraveler({
                                ...traveler,
                                userName: event.target.value,
                              });
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            Tour Image
                          </label>

                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                            onChange={(event) => {
                              setTraveler({
                                ...traveler,
                                userName: event.target.value,
                              });
                            }}
                          />
                        </div>{" "}
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4">
                          Phone Number
                        </label>

                        <input
                          type="text"
                          id="form3Example4"
                          class="form-control"
                          onChange={(event) => {
                            setTraveler({
                              ...traveler,
                              mobileNumber: event.target.value,
                            });
                          }}
                        />
                      </div>
                      <div class="form-outline col-md-12">
                        <label class="form-label" for="inputState">
                          <h4>Inclusions</h4>
                        </label>
                        <div>
                          {inclusions.map((item, index) => (
                            <div className="form-check text-start" key={index}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={JSON.stringify(item)} // Replace "value" with the appropriate property from your data
                                id={`checkbox-${index}`}
                              />
                              <div className="col-md-6">
                                <label
                                  className="form-check-label "
                                  htmlFor={`checkbox-${index}`}
                                >
                                  {item.inclusionDescription}{" "}
                                  {/* Replace "label" with the appropriate property from your data */}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="form-outline col-md-12">
                        <br />

                        <label class="form-label" for="inputState">
                          <h4> Exclusions</h4>
                        </label>
                        {/* <select id="inputState" className="form-control">
                          <option value="DEFAULT" disabled>
                            Exclusions
                          </option>
                          {exclusions.map((category, index) => (
                            <option
                              value={JSON.stringify(category)}
                              key={index}
                            >
                              {category.exclusionDescription}
                            </option>
                          ))}
                        </select> */}
                        <div>
                          {exclusions.map((item, index) => (
                            <div className="form-check text-start" key={index}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={JSON.stringify(item)} // Replace "value" with the appropriate property from your data
                                id={`checkbox-${index}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`checkbox-${index}`}
                              >
                                {item.exclusionDescription}{" "}
                                {/* Replace "label" with the appropriate property from your data */}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <br />
                      <div>
                        <h5>Itinerary</h5> <br />
                        {itineraryData.map((data, index) => (
                          <div key={index}>
                            <div className="row text-start">
                              <div className="col-md-6">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Day Number"
                                  id={`dayNo-${index}`}
                                  value={data.dayNo}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "dayNo",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Location Name"
                                  id={`locationName-${index}`}
                                  value={data.locationName}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "locationName",
                                      e.target.value
                                    )
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
                                  type="number"
                                  className="form-control"
                                  placeholder="Description"
                                  id={`description-${index}`}
                                  value={data.description}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Activities"
                                  id={`activities-${index}`}
                                  value={data.activities}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "activities",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <br />

                            <div className="row text-start">
                              <div className="col-md-6">
                                <label className="form-label">
                                  Arrival Time
                                </label>

                                <input
                                  type="time"
                                  className="form-control"
                                  placeholder="Day Number"
                                  id={`arrivalTime-${index}`}
                                  value={data.arrivalTime}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "arrivalTime",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Departure Time{" "}
                                </label>

                                <input
                                  type="time"
                                  className="form-control"
                                  placeholder="Departure Time"
                                  id={`departureTime-${index}`}
                                  value={data.departureTime}
                                  onChange={(e) =>
                                    handleAddChange(
                                      index,
                                      "departureTime",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <br />
                            <div className="text-start">
                              <label className="form-label ">Image </label>
                              <div class="row">
                                <div className="col-md-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Image"
                                    id={`image-${index}`}
                                    value={data.image}
                                    onChange={(e) =>
                                        handleAddChange(
                                        index,
                                        "image",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <i
                                onClick={() => handleDeleteEntry(index)}
                                className="loan-search-icon"
                                style={{ cursor: "pointer" }}
                              >
                                <AiOutlineCloseCircle />
                              </i>
                            </div>
                          </div>
                        ))}
                        <h6>
                          <button onClick={() => handleAddEntry()}>+</button>
                        </h6>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4 col-md-12"
                        onClick={travelerRegister}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TourRegistration;
