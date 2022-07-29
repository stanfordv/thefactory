import { useState } from 'react';
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

import {db} from '../../../../../../firebase'

export default function AddParentArc( { user, project, destString, label } ) {
    console.log("destString: " + destString)
	const [fieldValue, setFieldValue] = useState("")
	const [type, setType] = useState("")
	const handelGeneralizesChange = () => {
		//setType("generalizes")
		if (type === "generalizes") {
			setType("")
		} else {
			setType("generalizes")
		}
	}
	const handelQualifiesChange = () => {
		//setType("qualifies")
		if (type === "qualifies") {
			setType("")
		} else {
			setType("qualifies")
		}
	}
	const handelComprisesChange = () => {
		//setType("comprises")
		if (type === "comprises") {
			setType("")
		} else {
			setType("comprises")
		}
	}//const [generalizes, setGen] = useState(true)
    async function submitForm(e){        
        e.preventDefault()
        const docRef = await addDoc(collection(db, "projects", project, "arcs"), {
            dest_string: destString,
            source_string: fieldValue,
            weighting: 1,
            type: type,
            
        });      
        const newArcID = docRef.id
        console.log("Document written with ID: ", newArcID);
 
        const userLikesRef = doc(db, "projects", project, "arcs", newArcID, "likes", user)
        await setDoc(userLikesRef, {            
            user_likes: 1          
        })
        setFieldValue('')
    }
    
    return (
		<form
			onSubmit={(e) => e.preventDefault()}
			style={{
				boxSizing: "border-box",
				borderRadius: "5px",
				borderStyle: "solid",
				borderWidth: "0.1vw",
				padding: "5px",
				width: "100%",
			}}
		>
			{label}
			{type}
			<br />
			{/* <div
                onChange={(e) => setType(e.currentTarget.value)}
            > */}
			<input
				type='radio'
				checked={type === "generalizes"}
				name='type'
				onClick={handelGeneralizesChange}
			/>{" "}
			generalizes
			<input
				type='radio'
				checked={type === "qualifies"}
				name='type'
				onClick={handelQualifiesChange}
			/>{" "}
			qualifies
			<input
				type='radio'
				checked={type === "comprises"}
				name='type'
				onClick={handelComprisesChange}
			/>{" "}
			comprises <br/>
			{/* </div> */}
			<input
					type='text'
					value={fieldValue}
					placeholder='Add parent'
					onChange={(e) => setFieldValue(e.currentTarget.value)}
					autoFocus
					//onFocus={e => e.currentTarget.select()}
			></input>
			{type.length > 1 ? (
				
				<button
					onClick={(e) => submitForm(e)}
				>
					Add
				</button>
			) : (
				""
			)}
		</form>
	)
}

