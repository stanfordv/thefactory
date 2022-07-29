import React from 'react'
import { useState, useEffect } from 'react'
import {db} from '../../../../../firebase'
import { doc, query, onSnapshot } from "firebase/firestore";
import PlusOne from './_plusOne/PlusOne.jsx'

export default function ArcValue( {user, project, arcID} ) {
    console.log("ArcValue > arcID: ", arcID)
    const [arcTotal, setArcTotal] = useState("")
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "projects", project ,"arcs", arcID), (doc) => {
            setArcTotal(doc.data().weighting)
            console.log("&&&&&&& Arc data.weigting: ", doc.data().weighting);
        });
        
        
        
        // const q = query(doc(db, "projects", project ,"arcs", arcID), (doc) => {
        // });
        // const unsubscribe = onSnapshot(q, (querySnapShot) => {
        //     setArcTotal(querySnapShot.doc.weighting)  
        // })  
        return unsubscribe
    }, [arcID])
  
    return (
        <div>
            Arc Value: {arcTotal}
            <PlusOne user={user} project={project} arcID={arcID} />
        </div>
    )
}
