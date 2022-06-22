import React from 'react'
import { useState, useEffect } from 'react'
import fetchOutArcs from "./fetchOutArcs.js"


export default function DBTest() {
    const [outArcs, setOutArcs] = useState([])
    useEffect(() => {
        const unsubscribe = fetchOutArcs("huppy", setOutArcs)   
        return unsubscribe     
    }, [setOutArcs])  
    return (
        <div>DBTest: {outArcs[0]}</div>
    )
}
