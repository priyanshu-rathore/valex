import React from 'react'
import "./Sidebar.css"
import brand from "../../Assets/brand/logo.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TonalityIcon from '@mui/icons-material/Tonality';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ForumIcon from '@mui/icons-material/Forum';
import FeedIcon from '@mui/icons-material/Feed';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PlaceIcon from '@mui/icons-material/Place';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <>
    <div className="sidebar">
        <div className="upperdiv fixed-top" fixed="top">
        <div className="logo">
       <img src={brand} alt="" />
     </div>
        </div>
     <div className="menu">
       <div className="avatarcont">
        <img src={props.avatar} alt="" />
        <span className='glow'>
        
        </span>
       </div>
       <strong>Petey Cruiser</strong>
       <div className='premiummem'>Premium member</div>
      
     </div>
     <div className="menus">

        <h6>Main</h6>
        <span>
          <DashboardIcon/>
          <p><Link to="/" className='menux'>Index</Link></p>
        </span>

        <h6>General</h6>
        <span>
        <SentimentSatisfiedAltIcon/>
        <p><Link to="/icons" className='menux'>Icons</Link></p>
        </span>
        <span>
        <InsertChartIcon/>
        <p>Charts</p>
        </span>
        <span>
        <ShoppingBasketIcon/>
        <p>Ecommerce</p>
        </span>

        <h6>Web apps</h6>
        <span>
        <TonalityIcon/>
        <p>Apps</p>
        </span>
        <span>
        <ViewInArIcon/>
        <p>Elements</p>
        </span>
        <span>
        <ColorLensIcon/>
        <p>Advanced UI</p>
        </span>

        <h6>Components</h6>
        <span>
        <ForumIcon/>
        <p>Mail</p>
        </span>
        <span>
        <FeedIcon/>
        <p>Forms</p>
        </span>
        <span>
        <BackupTableIcon/>
        <p>Tables</p>
        </span>
        <span>
        <WidgetsIcon/>
        <p>Widgets</p>
        </span>
        <span>
          <PlaceIcon/>
          <p>Maps</p>
        </span>

        <h6>Pages</h6>
        <span>
        <MenuBookIcon/>
        <p>Pages</p>
        </span>
        <span>
        <OfflineBoltIcon/>
        <p>Utilities</p>
        </span>
        <span>
        <LockIcon/>
        <p>Custom Pages</p>
        </span>
        <span>
        <StorageIcon/>
        <p>Submenus</p>
        </span>

       </div>
    </div>
    </>
  )
}

export default Sidebar