import React from 'react'
import { useState, useEffect } from 'react';
import InArc from './_inArc/InArc.jsx'

export default function InArcs( props ) {
    console.log("InArcs > props.generations: ", props.generations)
    const [rows, setRows] = useState("")
    useEffect(() => {
        const rand = (Math.floor(Math.random() * 3))
        setRows([...Array(rand)].map((elem, index) => 
                    <InArc generations={props.generations} />
                ))
    }, []);  
    if(props.generations < 10){
        return (
            <div>               
                {rows}
            </div>
        )
    }else{
        return ("")
    }
}
