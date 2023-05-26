import { RingLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

function SpinnerLoading() {
  return (<>
  <ToastContainer/>
    <div className='pageload'>

     <div className="d-flex justify-content-center py-2">
                <a   className="logo d-flex align-items-center w-auto">
                  <img id='imageload' src="assets/img/logo.png" alt=""/>
                  <span id='loadspan'className="d-flex d-lg-block">HelpTun</span>
                </a>
                </div>   
                <br></br>

    <div   className="spinner ">
      <RingLoader color={'#123abc'} size={150} loading={true} />
    </div>
    </div>
    </>
  );
}

export default SpinnerLoading;