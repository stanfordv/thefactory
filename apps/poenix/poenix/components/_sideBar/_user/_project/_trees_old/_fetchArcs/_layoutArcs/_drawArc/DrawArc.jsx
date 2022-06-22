import React from 'react';
//
import { useState as useHookState} from '@hookstate/core'
import selected_arc from '../../../../../../../selected_arc_store.js'
//
import FetchArcs from '../../FetchArcs.jsx'

export default function DrawArc( {user, project, arc} ) {
    console.log("arc ", arc) 
    const selectedArc = useHookState(selected_arc)
    console.log("selectedArc: ", selectedArc)
    return (
        <li key={arc.arcID}> 
            <div
                style={{
                    boxSizing: "border-box",
                    width: "100%",
                    display:"flex"
                }}
            >
                <button
                    style={{
                        marginLeft: "20px",
                        minWidth: "50px" 
                    }}          
                    onClick={e => selectedArc.set({
                        arcID: arc.arcID,
                        sourceID: arc.source_string,
                        destID: arc.dest_string
                    })}
                >
                    --o
                </button> 
                <div
                    style={{
                        position: "relative",
                        width: "100%"
                    }}
                
                >
                    <div
                        style={{
                            //position: "absolute",
                            //zIndex: "3",
                            width: "350%"
                        }}
                    >
                        {arc.dest_string} ... your likes:  ... your value:  ... Total:
                    </div>
                </div>
            </div>
            <FetchArcs user={user} project={project} parentID={arc.dest_string} />
        </li>  
        
        // <li 
        //     id={arc.id}
        //     style={{ 
        //         // display: selected ? 'block' : 'none',
        //         boxSizing: "border-box",
        //         borderStyle: selectedArcID.get() === arc.id ? 'solid' : "none", 
        //         borderRadius: "5px",
        //         borderWidth: "0.1vw", 
        //         padding: "0px",
        //         paddingLeft: selectedArcID.get() === arc.id ? "4px" : "5px",
        //         margin: "0px"
        //     }}
        // >
        //     <div
        //         style={{
        //             width:"100%",
        //             display:"flex",
        //             padding:"0px",
        //             margin:"0px", 
        //         }}
        //     >
        //         <button    
        //             onClick = {(e) => selectedArcID.set(arc.id)}
        //             style = {{
        //                 // paddingLeft:"5px",
        //                 // paddingRight:"10px",
        //                 // minWidth:"20px",
        //                 // cursor:"pointer"
        //             }}
        //         >
        //             o
        //         </button>          
        //         <div
        //             onClick = {(e) => setNodeIDSelected(!nodeIDSelected)}
        //             style={{
        //                 width:"100%",
        //                 cursor:"pointer"
        //             }}
        //         >            
        //             {nodeIDSelected ? 
        //                 <b>{arc.dest_node_id}</b> 
        //             :
        //                 arc.dest_node_id
        //             }
        //         </div>
        //         <Value 
        //             arc={arc} 
        //             user={user}
        //             project={project}
        //             parentUserValue={parentUserValue}
        //         />
        //         {selectedArcID.get() === arc.id? 
        //             <ArcSideBar arc={arc} user={user} project={project}/>
        //         :
        //             ""         
        //         }
        //     </div>
        //     <Trees 
        //         user={user} 
        //         project={project} 
        //         parentID={arc.id} 
        //         parentUserValues={arc.userValues}
        //     />
        //     {/* <Branches 
        //         user={user} 
        //         project={project} 
        //         parentID={arc.id} 
        //         parentUserValues={arc.userValues}
        //     /> */}
        // </li>
    )
}
