
import React from 'react'
import "./Users.css"

const Users= (props)=>{

  return (
    <div  className="recent-customer">
      <div className="profile">
      <img  src={props.userimage} alt="" />
            <div className="title">
                <h4 >{props.title}</h4>
                <div className="userid">
                  <div className="status" >
                  <p>User ID :#1234</p>
                   <h6>{" "+props.status}</h6> 
                  </div>
                </div>
            </div>
            <div className="charts">{props.chart}</div>
      </div>
         </div>
  )
}

export default Users