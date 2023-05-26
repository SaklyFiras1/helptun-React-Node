import React, { useEffect, useState } from "react";
import background from "../Login/charity.jpg"
import axios from'axios'

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const Register = () => {
  var x
  let navigate=useNavigate()
  const urlgiver ='http://localhost:5001/api/user/givera'
  const urlcharity='http://localhost:5001/api/user/charity'
  const [selectdata,setselectdata]=useState('')
  const [inputdata,setinputdata]=useState({
    Email:'', 
    mot_de_passe:'',
    username:'',
    usertype:''
})
const handleSuccess=()=>{
  toast.success('Registred Successfully!',{
    position:toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
 bodyClassName:'custom'

  })};
  const handleError=async(event)=>{
 
    toast.error('Something Wrong Verify your  entry',{
      position:toast.POSITION.TOP_CENTER,
      hideProgressBar:true,
   bodyClassName:'custom'
  
    })};
 

  const {  Email,mot_de_passe,username,usertype}=inputdata
const handleselected=async (event)=>{
  event.preventDefault()
setselectdata(event.target.value)
x=event.target.value 


}


const handleregister=async(event)=>{
  event.preventDefault()
   console.log(selectdata)
if (selectdata==='giver'){
  
    axios.post(urlgiver,{
      Email,
      mot_de_passe,
      username,
      usertype

    }).then(res=>{
   handleSuccess()
navigate('/')
    }).catch(Error=>{
handleError()
    })
  }


  else{
    axios.post(urlcharity,{
      Email,
      mot_de_passe,
      username,
      usertype

    }).then(res=>{
      handleSuccess()
      navigate('/')
       }).catch(Error=>{
   handleError()
       })
     }



}
return (

  <>
<main  style={{backgroundImage: `url(${background})`,backgroundSize:'cover '}} >
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto ">
        
                  <img src="assets/img/logo.png" alt=""/>
                  <span class="d-flex d-lg-block">HelpTun</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form onSubmit={handleregister} class="row g-3 needs-validation" noValidate>
               

               

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" onChange={e=>setinputdata({...inputdata,username:e.target.value})} class="form-control" id="yourUsername" required/>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>
                    <div class="col-12">
                    <label for="usertype" class="form-label">User type</label>
                    <select value={selectdata}class="form-select"onChange={handleselected}id="validationTooltip04" required="">
                    <option disabled="" >Choose...</option>
                    <option value='charity'>Charity Account</option>
                    <option value='giver'> Giver Account</option>
                  </select>
                      </div>
                      <div class="col-12">
                      <label for="yourEmail" class="form-label"> Email</label>
                      <input type="email" onChange={e=>setinputdata({...inputdata,Email:e.target.value})}name="Email" class="form-control" id="yourEmail" required/>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>
                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password"onChange={e=>setinputdata({...inputdata,mot_de_passe:e.target.value})} name="Password" class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

              
                    
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Create Account</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? <a href="/Login"> Log in</a></p>
                    </div>
                  </form>

                </div>
              </div>  

             

            </div>
          </div>
        </div>

      </section>

    </div>
 
   

  </main>
  <footer style={{textAlign:'center',color:'#012970'}}>
   <div class="copyright">
   &copy; Copyright <strong><span>HelpTun</span></strong>. All Rights Reserved
 </div>

   </footer>
  </>
)}


export default Register;
