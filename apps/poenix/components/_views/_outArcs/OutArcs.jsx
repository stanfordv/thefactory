import React from "react"
import { useState, useEffect } from "react"
import fetchOutArcs from "./_outArcFunctions/fetchOutArcs.js"
import filterOutArcs from "./_outArcFunctions/filterOutArcs.js"

import CollapsedOutArcs from "./_collapsedOutArcs/CollapsedOutArcs.jsx"
import OutArc from "./_outArc/OutArc.jsx"

//TODO find a way to show project and uses valueations in the tree. We want to clearly see what they prioritize. Could it be that arrcs that you user votes for are just a different color. Which color if we already use many colors for different types of relations. What about the position in the list. We could show all the projects and users lists at top: three lists. This would involve a lot of duplication if arcs are liked on all three levels. What if there was a single list that is distorted in favour of your project and even more so in favour of yourself. It can't just be based on total votes: that would give no overview of what you think: User favourits would be shown where they otherwise would be shown. If it is simply ordered in relation to the average then all of the users arcs will be shown at the top. Could one simply change sorting mode?: That would make it hard to compare your sorting with the project sorting. This suggests it might be better to provide different views, but this will make it difficult to navgate in user views when some arcs will not exist. Perhaps the above always uses the universal for navigation and only opens other views from this. Could we create a weighted agrogate sorting that over emphasizes current project and over over emphasizes use weighting. Perhaps for now it is best just to show three variations.

export default function OutArcs( props ) {
	console.log("in OutArcs with project = " + props.project)
	console.log("OutArcs > props.columnID: ", props.columnID)
	//Component state
	const [dbOutArcs, setDbOutArcs] = useState([])
	const [filteredOutArcs, setFilteredOutArcs] = useState([])
	const [expanded, setExpanded] = useState(0)
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

		if (expanded === 0) {
			return (
				<CollapsedOutArcs
					// user={props.user}
					// project={props.project}
					dbOutArcs={dbOutArcs}
					expandedState={0}
					setExpanded={setExpanded}
				/>
			)
		}
		if (expanded === 1) {
			return (
				<div
					style={{
						position:"relative",
						textAlign:"left"
					}}
				>
					{dbOutArcs.map((arc) => {
						return (
							<OutArc
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
					<div 
						onClick={(e) => setExpanded(0)}
						style={{
							position: "absolute",
							bottom: "-15px"
						}}
					>^</div>
					{/* <CollapsedOutArcs expandedState={1} setExpanded={setExpanded} /> */}
				</div>
			)
		}
		if (expanded === 2) {
			return (
				<div>
					{dbOutArcs.map((arc) => {
						return (
							<OutArc
								key={arc.arcID}
								arc={arc}
								user={props.user}
								project={props.project}
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
