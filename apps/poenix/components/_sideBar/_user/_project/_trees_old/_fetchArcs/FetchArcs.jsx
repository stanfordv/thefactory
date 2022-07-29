import React from 'react';
import { useState, useEffect } from 'react';
//DB imports
import {db} from '../../../../../firebase-config'
import { collection, query, where, onSnapshot } from "firebase/firestore";

import LayoutArcs from './_layoutArcs/LayoutArcs.jsx'

export default function FetchArcs( {user, project, parentID}) {
    console.log("FetchArcs > ")
    const [dbArcs, setDbArcs] = useState([])
    useEffect(() => {
        console.log("project: " + project)
        const q = query(collection(db, "projects", project, "arcs"),             
            where("source_string", "==", parentID),
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tempDbArcs = [];
            querySnapshot.forEach((doc) => {
                tempDbArcs.push({
                    arcID: doc.id,
                    ...doc.data()
                });               
            });
            console.log("Trees(", parentID,") > DB tempDbArcs in setDbArcs: ", tempDbArcs)
            setDbArcs(tempDbArcs)  
        })  
        return unsubscribe
        
    }, [project, user, parentID, setDbArcs]); 
    return (
       <LayoutArcs  user={user} project={project} dbArcs={dbArcs} />
    );
}
