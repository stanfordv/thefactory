import React from 'react'
import {db} from '../../../../../firebase'

import { doc, deleteDoc } from "firebase/firestore";
import { useState as useHookState} from '@hookstate/core'
import selected_arc from '../../../../../selected_arc_store.js'



export default function DeleteArc( {user, project, arcID}) {
    const selectedArc = useHookState(selected_arc)
    async function deleteArc(){
        selectedArc.set({
            arcID: "",
            sourceID: "_",
            destID: ""
        })
        await deleteDoc(doc(db, "projects", project, "arcs", arcID)); 
                  
    }
  return (
    <>
        <button
            onClick={(e) => deleteArc()}
        >
            Delete Arc
        </button>
        (only for administrtors)
    </>
  )
}
