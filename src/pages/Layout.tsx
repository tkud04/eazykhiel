import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"


const Layout = () => {
   const [spinnerVisible,setSpinnerVisible] = useState(true)
  
    // Spinner
    const spinner = function () {
        setTimeout(function () {
            setSpinnerVisible(false)
            /*if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }*/
        }, 1000);
    }


    

   useEffect(() => {
     spinner()
   },[])



   

    return (
     <div>
      <div className="lines-wrap">
       <div className="lines-inner">
        <div className="lines"></div>
       </div>
      </div>

      <Header/>

      <Outlet/>

      <Footer/>
      {spinnerVisible && (
        <>
        {/* Spinner Start */}
        <div className="loader">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
         {/* Spinner End */}
         </>
       )}


    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></a> 
      {/* end FOOTER */}

     </div>

     
    )
}

export default Layout