import React from "react";
import Menu from './Menu'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";



function ChooseRegister() {
  return <div class="main">
    <Menu/>
   <Link to="/agentregister">Agnet</Link>
   <br/>
   <Link to="/travelerregister">Traveler</Link>

  
 </div>;
}
export default ChooseRegister;
