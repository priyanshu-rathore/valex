import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import "./MainFrame.css"
import avatar from "../../Assets/faces/3.jpg"
import Footer from '../Footer/Footer'
import Index from '../../pages/Index/Index'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Icons from '../../pages/Icons/Icons'
import Charts from '../../pages/Charts/Charts'
import Ecommerce from '../../pages/Ecommerce/Ecommerce'

const MainFrame = () => {
  return (
    <>
    <Router>
    <div className="wrapper">
    <Sidebar className="sidebar" avatar={avatar}/>
    <div className="Main">
    <Navbar className="navbar" avatar={avatar}/>
    <Routes>
      <Route path="/" element={<Index/>}/>
    <Route path="/icons" element={<Icons/>}/>
    <Route path="/charts" element={<Charts/>}/>
    <Route path="/ecommerce" element={<Ecommerce/>}/>

    </Routes>
    
      
    <Footer className="footer"/>
    </div>
    </div>
    </Router>
    </>
  )
}

export default MainFrame