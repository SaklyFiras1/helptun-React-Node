
import './App.css';
import { Routes, Route } from 'react-router'
import Login from './Login/Login';
import Register from './register';
import Pagenotfound from './pagenotfound404/notfound404';
import DashboardAdmin from './src/DashbordAdmin/components/DashboardAdmin/DashboardAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpinnerLoading from './ToastServices/spinner';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading the page content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 

  return (
<>  
{isLoading ? <SpinnerLoading /> :
    <Routes>
   
     <Route path='/' exact={true} element={<><ToastContainer/><Login/></>} />
      <Route path='/dashboardadmin' element={<><ToastContainer/><DashboardAdmin/></>} />
      <Route path='/register' element={<><ToastContainer/><Register/></>} />
    
      <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    
}
    </>
);
}

export default App;
