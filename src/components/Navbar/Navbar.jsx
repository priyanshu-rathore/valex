import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import usFlag from "../../Assets/flags/us_flag.jpg"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import frenchFlag from "../../Assets/flags/french_flag.jpg"
import germanyFlag from "../../Assets/flags/germany_flag.jpg"
import italyFlag from "../../Assets/flags/italy_flag.jpg"
import russiaFlag from "../../Assets/flags/russia_flag.jpg"
import spainFlag from "../../Assets/flags/spain_flag.jpg"
import {Link} from "react-router-dom";


const Navbar = (props) => {
  return (
  <>
  
  <nav className='navbar'>
      <div className="headerleft">
        <input type="text" name="" id="" placeholder='Search for anything...'/>
        <SearchIcon className='searchicon'/>
      </div>
      <div className="headerright">
     <ul>
       
       <li className='hover-me'><Link className='hover-me' to="#"><img className='hover-me usflag' src={usFlag} alt="" /></Link>
       <div className="sub-menu">
       <ul className='flags'>
       <li><Link to="#"><img src={frenchFlag} alt="" /></Link><span>French</span></li>
       <li><Link to="#"><img src={germanyFlag} alt="" /></Link><span>Germany</span></li>
       <li><Link to="#"><img src={italyFlag} alt="" /></Link><span>Italy</span></li>
       <li><Link to="#"><img src={russiaFlag} alt="" /></Link><span>Russia</span></li>
       <li><Link to="#"><img src={spainFlag} alt="" /></Link><span>Spain</span></li>
       </ul>
       </div>
       </li>
       <li><Link to="#"><MailOutlineIcon/></Link></li>
       <li><Link to="#"><NotificationsNoneIcon/></Link></li>
       <li><Link to="#"><FullscreenIcon/></Link></li>
       <li><Link to="#"><img className='avatar' src={props.avatar} alt="" /></Link></li>
       <li><Link to="#"><MenuOutlinedIcon/></Link></li>


     </ul>
   </div>
   
    </nav>
  
    
    
    
   </>
  )
}



export default Navbar