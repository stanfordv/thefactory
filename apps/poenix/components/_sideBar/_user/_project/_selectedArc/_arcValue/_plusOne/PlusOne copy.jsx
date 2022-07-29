import React from 'react'
import {useState} from 'react'
import { doc, updateDoc, collection, setDoc, query, where, getDocs } from "firebase/firestore";
import {db} from '../../../../../../firebase-config'

export default function PlusOne( {user, project, arcID, value}) {
    const [p, setP] = useState()
    const [totalLikes, setTotalLikes] = useState(0)
    const [returnedArray, setReturnedArray] = useState([])
    const newLikes = value + 1
    const washingtonRef = doc(db, "projects", project, "arcs", arcID, "likes", user)
    
    // async function addLikes() {
    //     p.forEach((doc) => {
    //         setTotalLikes(totalLikes + doc.data().user_likes)
    //     }).then(
    //         alert("totalLikes: " + totalLikes) 
    //     )
    // }
    async function setWeigting() {
        alert("In function setWeighting > totalLikes: " + totalLikes )
        await updateDoc(doc(db, "projects", project, "arcs", arcID), {
            weighting: totalLikes
          });
        return null
    }
    function calcTotal(){
        console.log("sadf")
        const tempDbArcs = []
        setTotalLikes(0)
        var likesSum = 0
        returnedArray.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tempDbArcs.push({
                arcID: doc.id,
                ...doc.data()
            });
            likesSum += doc.data().user_likes
            //console.log(doc.id, " => ", doc.data().user_likes)
        })
        // tempDbArcs.forEach((record) => {
        //     setTotalLikes(record.user_likes + totalLikes)
        // })
        //console.log(doc.id, " => ", doc.data());
        alert("likesSum: " + likesSum)
        setTotalLikes(likesSum)
        return null
    }


    function fetchLikes() {
        alert("user_likes: " + newLikes)
        const q = query(collection(db, "projects", project, "arcs", arcID, "likes") )
        const querySnapshot = getDocs(q); //await 
        setReturnedArray(querySnapshot) 
        return null       
    }

    function plusOne() {  
        const newLikes = value + 1
        setDoc(washingtonRef, {            
            user_likes: newLikes          
        }).then(
            fetchLikes()       
        ).then(
            calcTotal()
        ).then(
            setWeigting()
        )                       
    } 
    return (
        <button
            onClick={e => plusOne()}
        >+</button>
    )   

};
        
        



