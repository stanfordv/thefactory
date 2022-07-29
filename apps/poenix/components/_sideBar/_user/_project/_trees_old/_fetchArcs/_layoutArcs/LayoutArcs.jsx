import React from 'react';

//
import DrawArc from './_drawArc/DrawArc.jsx';
//


export default function FetchArcs( { user, project, dbArcs } ) {
    console.log("dbArcs: " + dbArcs)
    return (
        <>
            <ul 
                className="Trees" 
                style={{
                    boxSizing: "border-box",    
                    paddingLeft: "20px",
                    margin: "0px"
                }}
            >
                {dbArcs.map((arc) => {
                    return (                    
                        <>
                            <DrawArc key={arc.arcID} user={user} project={project} arc={arc} />  
                            {/* <li>{arc.dest_string}</li> */}
                        </>                
                    )
                })}
            </ul>
        </>
    );
    }
