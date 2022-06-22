import React from 'react'
import {useState} from 'react'

import User from './_user/User.jsx'

export default function SideBar({user, project, setUser, setProject}) {
  const [open, setOpen] = useState(true)
  return (
    <div
      className="SideBar"  
      style={{
        //position:"fixed",
        boxSizing: "border-box",
        borderStyle: "solid",
        borderRadius: "5px",
        borderWidth: "0.1vw",
        zIndex: "100",
        right:"10px",
        top:"10px",
        borderStyle: "solid",
        background: "white",            
      }}
    > 
      {!open ?
        <div
          style={{
            padding: "1px",
            margin: "1px",
            alignItems: "right"
          }}          
        >
          {/* Logo - &nbsp;&nbsp;  */}
          <button
            onClick={(e) => setOpen(true)}
          >
            ///
          </button>
        </div>
      :
        <>
          <div
            style={{
              //minWidth: "33vw",
              //maxWidth: "33vw",
              padding: "1px",
              margin: "1px",
              textAlign: "right",                
              overflow: "scroll"
            }}            
          >
            Logo - &nbsp;&nbsp; 
            <button
              onClick={(e) => setOpen(false)}
            >
              X
            </button>            
            <User user={user} project={project} setUser={setUser} setProject={setProject}/>
          </div>
        </>
      }       
    </div>
  )
}
