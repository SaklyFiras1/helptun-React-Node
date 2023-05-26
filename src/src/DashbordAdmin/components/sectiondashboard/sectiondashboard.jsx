import axios from "axios";
import React, { useEffect, useState } from "react";
import {  BiCommentDots, BiLike } from 'react-icons/bi';
import { useNavigation } from "react-router";
const Sectiondashboard = () => {
  const [users,setusers]=useState([])
  let navigate=useNavigation
  const usersurl='http://localhost:5001/api/user/'
  axios.interceptors.request.use((config )=>{
    const token =window.localStorage.getItem('token')
    
    if(token){
    config.headers.Authorization=`Bearer ${token}`
    return config
    }
 else{
  navigate('/')
 }
 
  })
  

 const getallusers =  () => {

 axios.get(usersurl)
.then(res => {

   setusers(res.data)
   console.log(res.data)
  })
  .catch(error => {

    console.log(error);
  });
}

useEffect(()=>{

getallusers()

},[])


 



  return(
  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
      <div class="row">


        <div class="col-lg">
          <div class="row">

          <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

               

                <div class="card-body ">
                  <h5 class="card-title">Users </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>145</h6>
                     

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

             

                <div class="card-body " >
                  <h5 class="card-title">Comments </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i  ><BiCommentDots/></i>
                    </div>
                    <div class="ps-3">
                      <h6>135</h6>
                     
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

              
                <div class="card-body" >
                  <h5 class="card-title">Likes</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i ><BiLike/></i>
                    </div>
                    <div class="ps-3">
                      <h6>100</h6>
                      

                    </div>
                  </div>
                </div>

              </div>
            </div>







            <div class="col">
              <div class="card recent-sales overflow-auto">



                <div class="card-body">
                  <h5 class="card-title">Recent Donations</h5>

                  <table class="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">ID_Giver</th>
                        <th scope="col">Username</th>
                        <th scope="col">Charity</th>
                        <th scope="col">Donation Price</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                     
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Sakly</td>
                        <td><a href="#" class="text-primary">jam3iyatou l3asba ejtima3iya</a></td>
                     <td>&nbsp;&nbsp;$175</td>
                    
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
          


            <div class="col-12">
              <div class="card top-selling overflow-auto">


                <div class="card-body pb-0">
                  <h5 class="card-title">Users <span>| Today</span></h5>

                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Id_User</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th scope="col"> Donation Given </th>
                        <th scope="col"> Donation Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user=>(
                      <tr key={user._id}>
                        <th scope="row">{user._id}</th>
                        <td><a href="#" class="text-primary fw-bold">{user.username}</a></td>
                        <td>{user.ville}</td>
                        <td>{user.Email}</td>
                        <td>{user.role}</td>
                        <td>{user.updatedAt}</td>
                        <td>{user.createdAt}</td>
                        <td class="fw-bold">&nbsp;0$</td>
                        <td>&nbsp;0$</td>
                        
                      </tr>))}
                    
                    
                    </tbody>
                  </table>

                </div>

              </div>
            </div>

          </div>
        </div>




      </div>
    </section>

  </main>

);
  }

export default Sectiondashboard;
