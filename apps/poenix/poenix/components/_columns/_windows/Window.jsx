import React from "react"
import { useState as useHookState } from "@hookstate/core"
import windowsState from "../windowsState.js"
import longestCommonSubstring from "./longestCommonSubstring"

import Canvas from "./_canvas/Canvas.jsx"

export default function Window(props) {
	console.log("in Window with project = " + props.project)
	const windowsOpen = useHookState(windowsState)
	return (
		<div
			style={{
				//position: "absolute",
				border: "1px solid blue",
				borderRadius: "5px",
				left: "0px",

				//height: "auto",
				zIndex: "10",

				direction: "rtl",
				resize: "vertical",
				overflow: "auto",
				paddingBottom: "7px",

				//direction: "btt",
			}}
		>
			<div
				style={{
					backgroundColor: "white",
					overflow: "scroll",
					direction: "ltr",
					right: "3px",
					top: "3px",
					bottom: "3px",
				}}
			>
				{/* Window({props.columnID}) Node: {props.nodeString}
				<br /> */}
				{/* <button onClick={(e) => windowsOpen.set(4)}>4</button>
			<button onClick={(e) => windowsOpen.set(3)}>3</button>
			<button onClick={(e) => windowsOpen.set(2)}>2</button>
			<button onClick={(e) => windowsOpen.set(1)}>1</button>
			<button onClick={(e) => windowsOpen.set(0)}>0</button> */}
				<Canvas
					user={props.user}
					project={props.project}
					columnID={props.columnID}
					nodeString={props.nodeString}
				/>
			</div>
		</div>
	)
}
