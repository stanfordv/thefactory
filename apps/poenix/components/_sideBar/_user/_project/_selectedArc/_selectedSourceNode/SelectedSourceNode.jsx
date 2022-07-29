import React from 'react'

//import AddArc from '../_selectedDestNode/_addArc/AddParentArc.jsx'

export default function SelectedSourceNode( {user, project, sourceNodeString} ) {
    console.log("SelectedSourceNode > sourceNodeString: ", sourceNodeString)
  return (
    <div
        style={{
            boxSizing: "border-box",
            borderRadius: "5px",
            borderStyle:"solid",
            borderWidth:"0.1vw",
            padding:"5px",
            width:"100%",
        }}
    
    >
        Source Node: {sourceNodeString}
        {/* <AddArc user={user} project={project} sourceString={nodeString}/> */}

    </div>
  )
}
