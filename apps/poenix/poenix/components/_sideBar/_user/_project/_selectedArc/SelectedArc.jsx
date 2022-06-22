import React from 'react';
import { useState as useHookState} from '@hookstate/core'
//
import selected_arc from '../../../../selected_arc_store.js'
//
import ArcValue from './_arcValue/ArcValue.jsx'
import DeleteArc from './_deleteArc/DeleteArc.jsx'
import SelectedDestNode from './_selectedDestNode/SelectedDestNode.jsx'
import SelectedSourceNode from './_selectedSourceNode/SelectedSourceNode.jsx'
import ChangeNodeString from './_changeNodeString/ChangeNodeString.jsx'
import ChangeNodeString2 from './_changeNodeString/ChangeNodeString2.jsx'
import AddArc from './_selectedDestNode/_addArc/AddArc.jsx'
// import AddRootArc1 from './_selectedDestNode/_addArc/AddRootArc1.jsx'
// import AddRootArc2 from './_selectedDestNode/_addArc/AddRootArc2.jsx'

export default function Details( {user, project}) {
    const selectedArc = useHookState(selected_arc)
    return(    
        <div 
            className="SelectedArc"
            style={{
                // position:"fixed",
                boxSizing: "border-box",
                borderRadius: "5px",
                // right:"5px",
                // top:"5px",
                borderStyle:"solid",
                borderWidth:"0.1vw",
                //margin:"5px",
                padding:"1px",
                margin:"1px",
                //width:"100%",
                //width:"90%",
                //maxWidth:"98%",
                //height:"90%",
                background:"white",
                // overflow: "scroll", 
                // display: "flex",
                // flexDirection: "column-reverse"
            }}
        >
            {selectedArc.get().arcID} 
            {selectedArc.get().arcID != "" ?
                <>
                    <button
                        style={{
                            marginLeft: "20px"
                        }}          
                        onClick={e => selectedArc.set({
                            arcID: "",
                            sourceID: "_",
                            destID: ""
                        })}
                    >
                        Unselect
                    </button>
                    <ArcValue user={user} project={project} arcID={selectedArc.get().arcID}/>
                    <DeleteArc  user={user} project={project} arcID={selectedArc.get().arcID}/>
                    <SelectedSourceNode user={user} project={project} sourceNodeString={selectedArc.get().sourceID}/>
                    <SelectedDestNode user={user} project={project} nodeString={selectedArc.get().destID}/>
                    <ChangeNodeString user={user} project={project} arcID={selectedArc.get().arcID} nodeString={selectedArc.get().destID}/>
                    <ChangeNodeString2 user={user} project={project} nodeString={selectedArc.get().destID}/>
                </>
            :
                <>
                    "No selected arc"
                    <AddArc user={user} project={project} sourceString="" label="Add project arc:"/>
                    <AddArc user={user} project={project} sourceString="*" label="Add non-project arc:"/>
                    {/* <AddRootArc1 user={user} project={project} sourceString="" label="Add project arc:"/>
                    <AddRootArc2 user={user} project={project} sourceString="*"/> */}
                </>
            }
        </div>
    )
}
