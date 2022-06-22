import React from "react"
//import DBTest from "../../../_views/DBTest"
import OutArcs from "../../../_views/_outArcs/OutArcs.jsx"
import TopNodes from "../../../_views/_outArcs/TopNodes.jsx"



export default function BaseCanvas( props ) {
	console.log("in Canvas with project = " + props.project)
	return (
		<div
			style={{
				//paddingRight:"120vw"
				paddingTop: "10px",
				paddingBottom: "30px",
			}}
		>
			{/* BaseCanvas */}
			<TopNodes 
				user={props.user}
				project="global"    //{props.project}
                columnID={0}
				generations="5" 
				sourceNode="" />
			{/* <DBTest /> */}
			{(props.project) ?
				// <p>hiiii </p>
				<div
					className="redProject"
					style={{
						position:"relative",
						//left:"15px",
						margin:"10px",
						padding:"10px",
						border:"1px solid red",
						borderRadius: "3px",
						overflow: "auto",
					}}
				>
					<TopNodes 
						user={props.user}
						project={props.project}
						columnID={0}
						generations="5" 
						sourceNode="*"
					/>
				</div>
			:
				""
			}

		</div>
	)
}
