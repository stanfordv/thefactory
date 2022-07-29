import React from 'react'
import {useState} from 'react'
import { doc, updateDoc, collection, getDoc, setDoc, query, where, getDocs } from "firebase/firestore";
import {db} from '../../../../../../firebase'

// This can be done much more efficiently by simply adding inc to user_value and to weighting
export default function PlusOne( {user, project, arcID}) {
    async function plusOne(inc) {  
        var currentLikes = 0
        // I don't know what this d is for
        const d = {}
        // get the likes object for the current user
        const docSnap = await getDoc(doc(db, "projects", project ,"arcs", arcID, "likes", user));
        // fetch the user-likes object with user as id and if it exists 
        //put the value of the user_likes field into the variable currentLikes
        // It is assumed that if the object exists for the user there will be a field called user_likes in it
        if(docSnap.exists()){
            currentLikes = docSnap.data().user_likes
        }
        //alert("current "+ user + " likes: " + currentLikes)
        var newLikes = 0
        // Seems to be cheking again if the user likes object of the user exists, but
        // is checking that the user_likes filed existed and was not zero  
        if(!currentLikes){
            newLikes = inc
        }else{
            newLikes = currentLikes + inc
        }
        //Adds the updated value to the database
        const washingtonRef = doc(db, "projects", project, "arcs", arcID, "likes", user)
        await setDoc(washingtonRef, {            
            user_likes: newLikes          
        })
        //This part adds togeather the likes of all of the users who have liked the arc
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
        //And puts that sum into the weighting field of the arc
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
        
        



