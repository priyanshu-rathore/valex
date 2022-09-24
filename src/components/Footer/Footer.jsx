import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./Footer.css"

const Footer = () => {
  return (
    
    <p className='py-3 footer'>Copyright<CopyrightIcon className='mx-2'/> 2022 <span className='mx-2 text-primary'>Valex</span> Designed by <span className='mx-2 text-primary'>Spurko</span> All rights reserved.</p>
  )
}

export default Footer