import React from 'react'
import {useState} from 'react'
import { doc, updateDoc, collection, getDoc, setDoc, query, where, getDocs } from "firebase/firestore";
import {db} from '../../../../../../firebase-config'

// This can be done much more efficiently by simply adding inc to user_value and to weighting
export default function PlusOne( {user, project, arcID}) {
    async function plusOne(inc) {  
        var currentLikes = 0
        const d = {}
        const docSnap = await getDoc(doc(db, "projects", project ,"arcs", arcID, "likes", user));
        if(docSnap.exists()){currentLikes = docSnap.data().user_likes}
        //alert("current "+ user + " likes: " + currentLikes)
        var newLikes = 0
        if(!currentLikes){
            newLikes = inc
        }else{
            newLikes = currentLikes + inc
        }
        //alert("newLikes for " + user + " are: " + newLikes)
        const washingtonRef = doc(db, "projects", project, "arcs", arcID, "likes", user)
        await setDoc(washingtonRef, {            
            user_likes: newLikes          
        })
        //alert("user_likes should be set to: " + newLikes)
        const q = query(collection(db, "projects", project, "arcs", arcID, "likes") )
        const querySnapshot = await getDocs(q); //await
        var likesSum = 0
        await querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // tempDbArcs.push({
            //     arcID: doc.id,
            //     ...doc.data()
            // });
            likesSum += doc.data().user_likes
            //console.log(doc.id, " => ", doc.data().user_likes)
        }) 
        //alert("likesSum: " + likesSum)
        //alert("In function setWeighting > totalLikes: " + totalLikes )
        await updateDoc(doc(db, "projects", project, "arcs", arcID), {
            weighting: likesSum
        })
        return null
    } 
    return (
        <>
        <button
            onClick={e => plusOne(1)}
        >+</button>
        <button
            onClick={e => plusOne(-1)}
        >-</button>
        </>
    )   

};
        
        



