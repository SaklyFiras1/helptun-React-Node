import React, {  useEffect, useState } from "react";
import background from'../Login/charity.jpg'
import axios from'axios'
import { useNavigate } from 'react-router-dom';
import './toast.css'
import { ToastContainer, toast } from 'react-toastify';
import SpinnerLoading from "../ToastServices/spinner";

function Login () {
  
  let navigate = useNavigate();
 
      
  const [inputdata,SetInputData] = useState({
    Email:null,
    mot_de_passe:null
      })
      const {Email,mot_de_passe}=inputdata
    // Loading function to load data or 
    // fake it using setTimeout;

    const handleSuccess=()=>{
      toast.success('Logged In Successfully!',{
        position:toast.POSITION.TOP_CENTER,
        hideProgressBar:true,
     bodyClassName:'custom'
    
      })};
      const handleError=async(event)=>{
     
        toast.error('Wrong Email Or Password',{
          position:toast.POSITION.TOP_CENTER,
          hideProgressBar:true,
       bodyClassName:'custom'
      
        })};
     
   
const url='http://localhost:5001/api/user/Login'
const  handlesubmit =(event)=>{
  event.preventDefault()


  
    axios.post(url,{  
      Email,
    mot_de_passe
    }).then(async(res)=>{
  

localStorage.setItem('token',res.data.token)

handleSuccess()
navigate('/dashboardadmin')




}).catch(Error=>{
handleError()
})
}

  return(
    
   <>


 
<main style={{backgroundImage: `url(${background})`,backgroundSize:'cover '}} >

   
    <div className="container"  >
 
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
     
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span className="d-flex d-lg-block">HelpTun</span>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your Email & Password to login</p>
                  </div>

                  <form  onSubmit={handlesubmit}  className="row g-3 needs-validation" novalidate>
                  <div class="col-12">
                      <label for="yourUsername" class="form-label">Email</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="Email" name="Email" class="form-control"pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="yourEmail" onChange={e=>SetInputData({...inputdata,Email:e.target.value})} required/>
                        <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                      </div>
                    </div>
                  
                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="mot_de_passe"onChange={e=>SetInputData({...inputdata,mot_de_passe:e.target.value})}name="mot_de_passe" class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div className="cx²ol-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button id="500" className="btn btn-primary w-100" >Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="/Register">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

       

            </div>
          </div>
        </div>

      </section>

    </div>
   
 
   <footer style={{textAlign:'center',color:'#012970',padding:'-70px 0px'}}>
   <div className="copyright">
   &copy; Copyright <strong><span>HelpTun</span></strong>. All Rights Reserved
 </div>

   </footer>
   </main>
   
   </>
  
   )
   
  }


  
export default Login;
