import Header from "../header/header";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import Footer from "../footer";
import Sectiondashboard from "../sectiondashboard";
import { redirect, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import'./DashboardAdmin.css'
import SpinnerLoading from "../../../../ToastServices/spinner";
import '../DashboardAdmin/DashboardAdmin.css'
function DashboardAdmin() {
    
    let navigate=useNavigate();
  
    useEffect(()=>{
       
 const loggedin=()=>{
 

    const token=localStorage.getItem('token')
    if(token){

    }
    else{
toast.warning('Something Wrong ',{     position:toast.POSITION.TOP_CENTER,
    className:'dashboard'})
navigate('/Register');
    }
  }
  loggedin()

})
  return (

<>   <Header /><SidebarMenu /><Sectiondashboard />< Footer /></>
  );
}

export default DashboardAdmin;
