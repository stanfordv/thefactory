import React from 'react'
import { useEffect } from 'react'

import { onSnapshot, collection } from 'firebase/firestore'
import db from '../firebase.js'

export default function DBTest() {
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "projects"),(snapshot)=>{
            console.log(snapshot)
        })
        return unsubscribe
    }, [])
  
  
    return (
        <div>DBTest</div>
    )
}
