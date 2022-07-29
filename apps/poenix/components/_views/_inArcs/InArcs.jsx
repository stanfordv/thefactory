import React from "react"
import { useState, useEffect } from "react"
import fetchInArcs from "./_inArcFunctions/fetchInArcs.js"
import filterOutArcs from "./_inArcFunctions/filterOutArcs.js"

import CollapsedInArcs from "./_collapsedInArcs/CollapsedInArcs.jsx"
import InArc from "./_inArc/inArc.jsx"

export default function InArcs( props ) {
	console.log("in InArcs with project = " + props.project)
	console.log("InArcs > props.columnID: ", props.columnID)
	//Component state
	const [dbInArcs, setDbInArcs] = useState([])
	const [filteredInArcs, setFilteredInArcs] = useState([])
	const [expanded, setExpanded] = useState(0)
	//Fetch arcs form db
	useEffect(() => {
		const unsubscribe = fetchInArcs(
			props.user, 
			props.project, 
			props.sourceNode, 
			setDbInArcs
		)
		return unsubscribe
	}, [setDbInArcs, props.sourceNode])


	if (dbInArcs.length > 0) {
		//Administer collapsed and expanded

		if (expanded === 0) {
			return (
				<CollapsedInArcs
					// user={props.user}
					// project={props.project}
					dbInArcs={dbInArcs}
					expandedState={0}
					setExpanded={setExpanded}
				/>
			)
		}
		if (expanded === 1) {
			return (
				<div
					style={{
						//paddingTop:"15px",
						position:"relative",
						textAlign:"right"
					}}
				>
					<div 
						onClick={(e) => setExpanded(0)}
						style={{
							position: "absolute",
							top: "-17px",
							right:"0px",
							zIndex:"10"
						}}
					>v</div>
					{/* <div onClick={(e) => setExpanded(0)}>x</div> */}
					{dbInArcs.map((arc) => {
						return (
							<InArc
								user={props.user}
								project={props.project}	
								key={arc.arcID}
								arc={arc}
								columnID={props.columnID}
								destNode={props.destNode}
								generations={props.generations}
							/>
						)
					})}
					
				</div>
			)
		}
		if (expanded === 2) {
			return (
				<div>
					{dbInArcs.map((arc) => {
						return (
							<InArc
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
		}
	} else {
		return null
	}
}
