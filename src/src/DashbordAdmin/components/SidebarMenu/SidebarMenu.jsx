
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SidebarMenu= ()=>{
  let navigate=useNavigate()

  const loggedout=async (event )=>{
  
    localStorage.removeItem('token')
    
    toast.warning('Logged out Successfully  ',{     position:toast.POSITION.TOP_CENTER,hideProgressBar:true

    } )
  
navigate('/')

    event.preventDefault();

 
  }

  
        return(
  <aside id="sideba" class="sideba">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link " href="index.html">
        <i class="bi bi-grid"></i>
        <span>Dashboard</span>
      </a>
    </li>



    <li class="nav-item">
      <a class="nav-link collapsed" href="users-profile.html">
        <i class="bi bi-person"></i>
        <span>News Feed</span>
      </a>
    </li>


    <li class="nav-heading">Account Settings</li>
    <li class="nav-item">
      <a class="nav-link collapsed" href="users-profile.html">
        <i class="bi bi-person"></i>
        <span>Change Password</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link collapsed" href="users-profile.html">
        <i class="bi bi-person"></i>
        <span>Change Photo</span>
      </a>
    </li>
    <li class="nav-item  ">
      <a class="nav-link collapsed" href="/" onClick={loggedout} >
        <i class="bi bi-box-arrow-in-right" ></i>
        <span>SignOut</span>
      </a>
    </li>

   

  </ul>

</aside>
);
       }
export default SidebarMenu;
