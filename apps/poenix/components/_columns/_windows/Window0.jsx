import React from "react"
import { useState as useHookState } from "@hookstate/core"
import windowsState from "../windowsState.js"
import longestCommonSubstring from "./longestCommonSubstring"

import BaseCanvas from "./_canvas/BaseCanvas.jsx"

export default function Window0( props ) {
	console.log("in Window with project = " + props.project)
	const windowsOpen = useHookState(windowsState)

	longestCommonSubstring('Hmappy', 'MMmapp')
	{longestCommonSubstring("Hmappy", "MMmapp")} <br />
	let text = "Hmappy";
	let newText = text.replace(longestCommonSubstring("Hmappy", "MMmapp"), "tim");

	return (
		<div
			style={{
				position: "absolute",
				border: "1px solid black",
				borderRadius: "5px",
				left: "0px",
				right: "0px",
				top: "15px",
				bottom: "0px",
				//height: "100vh",
				zIndex: "10",
				backgroundColor: "white",
				overflow: "scroll",
			}}
		>
			




			
			{/* Window
			<br />
			"longestCommonSubstring('Hmappy', 'MMmapp')":
			{longestCommonSubstring("Hmappy", "MMmapp")} <br />
			<button onClick={(e) => windowsOpen.set(4)}>4</button>
			<button onClick={(e) => windowsOpen.set(3)}>3</button>
			<button onClick={(e) => windowsOpen.set(2)}>2</button>
			<button onClick={(e) => windowsOpen.set(1)}>1</button>
			<button onClick={(e) => windowsOpen.set(0)}>0</button> */}
			<BaseCanvas 
				user={props.user}
				project={props.project}
				columnID={props.columnID}
			/>
		</div>
	)
}
