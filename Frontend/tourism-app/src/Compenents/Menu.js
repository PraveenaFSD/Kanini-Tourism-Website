import React from "react";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";

import './Menu.css'
function Menu() {
  return <div><div class="container-fluid-lg">

	
  <nav class="navbar navbar-expand-lg navbar-light">
  <img  className="ss" src={logo} alt="Card image cap" />

      <button class="navbar-toggler" type="button" 
      data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto topnav">
             
              <li class="nav-item">
                  <Link class="nav-link text-black" to="/viewTour">About</Link>
              </li>
              <li class="nav-item">
                  <Link class="nav-link text-black" to="/tourregistartion">Contact</Link>
              </li>
              <li class="nav-item">
                  <Link class="nav-link btn b text-black" type="button" to="/login" data-toggle="modal" data-target="#myModal">Sign In</Link>                  
              </li>
              <li class="nav-item">
                  <Link class="nav-link  text-black"   to="/chooseregister" data-toggle="modal" data-target="#myModal">Register</Link>
              </li>
              <li class="icon-call">
                  <Link class="nav-link  text-black"   data-toggle="modal" data-target="#myModal"><i><MdAddIcCall/></i></Link>
              </li>
              <li class="">
                  <Link class="nav-link  text-black"   data-toggle="modal" data-target="#myModal">Need-help-booking?<br/>1-234-456-542</Link>
              </li>
          </ul>
      </div>
      

          {/* <!-- The Modal --> */}
  <div class="modal" id="myModal">
      <div class="modal-dialog">
          <div class="modal-content">

              {/* <!-- Modal Header --> */}
              <div class="modal-header">
                  <h4 class="modal-title">Customer Sign In</h4>
                  <button type="button" class="close" data-dismiss="modal">×</button>
              </div>

              {/* <!-- Modal body --> */}
              <div class="modal-body">
                  <form>
                      <label class="sr-only" for="usrname">Username</label>
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>


                      <label class="sr-only" for="Password">Name</label>
                      <div class="input-group mb-2">
                          <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                          </div>
                          <input id="Password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
                      </div>
                  </form>
              </div>

              {/* <!-- Modal footer --> */}
              {/* <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" >Sign In</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div> */}

          </div>
      </div>
  </div>
          

  </nav>
</div> </div>;
}
export default Menu;
