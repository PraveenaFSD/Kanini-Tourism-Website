import React from "react";
import Menu from './Menu'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import './AgentRegister.css'
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";



function Login() {
  return <div class="main">
    <Menu/>
    <div  class="container">
    <div class="main-login">
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" >
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1 class="my-5 display-3 fw-bold ls-tight">
              The best offer <br />
              <span class="text-primary">for your holiday trip</span>
            </h1>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>
          </div>
  
          <div class="col-lg-6 mb-5 mb-lg-0 ">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Agent Name</label>

                    <input type="email" id="form3Example3" class="form-control" />
                  </div> 
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Phone Number</label>

                    <input type="number" id="form3Example4" class="form-control" />
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Email address</label>

                    <input type="email" id="form3Example3" class="form-control" />
                  </div>
                 
                  {/* <div class="row">
                    <div class="col-md-6 mb-4">
                        
                      <div class="form-outline">
                        
                      <label class="form-label" for="form3Example1">First name</label>

                        <input type="text" id="form3Example1" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label" for="form3Example2">Last name</label>

                        <input type="text" id="form3Example2" class="form-control" />
                      </div>
                    </div>
                  </div> */}
  
             
  
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Password</label>

                    <input type="password" id="form3Example4" class="form-control" />
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Travel Name</label>

                    <input type="text" id="form3Example4" class="form-control" />
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Agent address</label>

                    {/* <input type="text" rows="5" id="form3Example3" class="form-control custom-width" /> */}
                    <textarea class="form-control" rows="3" id="comment"></textarea>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">State</label>

                    <input type="password" id="form3Example4" class="form-control" />
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Country</label>

                    <input type="password" id="form3Example4" class="form-control" />
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4">Lisence Numbe</label>

                <input type="text" id="form3Example4" class="form-control" />
                  </div>
                  <p>registered user? <Link>sign in</Link></p>
  
  
                  <button type="submit" class="btn btn-primary btn-block mb-4 col-md-12">
                    Register
                  </button>
  
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <AiFillGithub />
                    </button>
  
                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <AiFillGoogleCircle />
                    </button>
  
                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <BsFacebook />
                    </button>
  
                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i className="loan-search-icon">
                      <AiFillTwitterCircle />
                    </i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  
 </div>;
}
export default Login;
