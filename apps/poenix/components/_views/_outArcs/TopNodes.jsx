import React from "react"
import { useState, useEffect } from "react"
import fetchOutArcs from "./_outArcFunctions/fetchOutArcs.js"
import filterOutArcs from "./_outArcFunctions/filterOutArcs.js"

import CollapsedOutArcs from "./_collapsedOutArcs/CollapsedOutArcs.jsx"
import TopNode from "./_outArc/TopNode.jsx"

export default function TopNodes( props ) {
	console.log("in OutArcs with project = " + props.project)
	console.log("OutArcs > props.columnID: ", props.columnID)
	//Component state
	const [dbOutArcs, setDbOutArcs] = useState([])
	// const [filteredOutArcs, setFilteredOutArcs] = useState([])
	// const [expanded, setExpanded] = useState(0)
	//Fetch arcs form db
	useEffect(() => {
		const unsubscribe = fetchOutArcs(
			props.user, 
			props.project, 
			props.sourceNode, 
			setDbOutArcs
		)
		return unsubscribe
	}, [setDbOutArcs, props.sourceNode])
	//FIlter dbOutArcs to filteredOutArcs
	// useEffect(() => {
	// 	const unsubscribe = filterOutArcs(dbOutArcs, setFilteredOutArcs)
	// 	return unsubscribe
	// }, [dbOutArcs, setFilteredOutArcs])

	if (dbOutArcs.length > 0) {
		//Administer collapsed and expanded
		return (
			<div>
				{dbOutArcs.map((arc) => {
					return (
						<TopNode
							user={props.user}
							project={props.project}	
							key={arc.arcID}
							arc={arc}
							columnID={props.columnID}
							sourceNode={props.sourceNode}
							generations={props.generations}
						/>
					)
				})}
			</div>
		)		
	} else {
		return null
	}
}
