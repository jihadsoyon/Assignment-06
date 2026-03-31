
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
function App() {


  return (
<div className="min-h-screen bg-white font-sans">
    <Navbar  />
   <Banner />



{/* React Toastify */}
       <ToastContainer />   
   </div>
  )
}

export default App
