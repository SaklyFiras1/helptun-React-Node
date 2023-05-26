import React from "react";
import { useNavigate } from "react-router";

const  Header=()=>{


    return (
  <div id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span class="d-none d-lg-block">HelpTun</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>

   

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="/">
            <i class="bi bi-search"></i>
          </a>
        </li>

  
        

       
        <li class="nav-item pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="/" >
            <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"/>
            <span class="d-none d-md-block  ps-2">Sakly.Firas</span>
          </a>

          
        </li>

      </ul>
    </nav>
  </div>)
}

export default Header;
