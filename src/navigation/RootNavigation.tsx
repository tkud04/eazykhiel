import React, {useState,useEffect} from "react"
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom"
  import { useEazykhielSelector,useEazykhielDispatch } from "../store"

  import Layout from "../pages/Layout"
import { restoreProfileData } from "../common/util"
import ProtectedRoute from "../components/ProtectedRoute"
import { Home } from "../pages/Home"
  
  /*
  import Home from "../pages/Home"
  import Login from "../pages/Login"
  import Signup from "../pages/Signup"
  import Security from "../pages/Security"
  import NotFound from "../pages/NotFound"

  import DashboardLayout from "../pages/DashboardLayout"
  import Dashboard from "../pages/Dashboard"
import { useGlobalDispatch } from "../contexts/globalContext"
import { restoreProfileData } from "../common/utils"
import ProtectedRoute from "../components/ProtectedRoute"
import Resumes from "../pages/Resumes"
*/




  const RootNavigation = () => {
    const [destination,setDestination] = useState('')
   
    const dispatch = useEazykhielDispatch()
    

  const restoreProfile = () => {
    const response = restoreProfileData()
   console.log('tried to restore profile info: ',response)
    if (response) {
      
    }
  }

  useEffect(() => {
    restoreProfile()
  },[])



    const protectRoute = (children:JSX.Element) => (
       <ProtectedRoute>
        {children}
       </ProtectedRoute>
    )



    const router = createBrowserRouter(
       createRoutesFromElements(
         <>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            {/*<Route path="/xxx" element={<Resumes/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
       <Route path="*" element={<NotFound/>}/>*/}
           </Route>  

          {/* <Route element={<DashboardLayout/>}>
            <Route path="/dashboard" element={protectRoute(<Dashboard/>)}  />
            <Route path="/security" element={protectRoute(<Security/>)} />
            </Route>
         */}
        </>
       )
    )


    return (
       <RouterProvider router={router}/>
    )
  }
  
export default RootNavigation
