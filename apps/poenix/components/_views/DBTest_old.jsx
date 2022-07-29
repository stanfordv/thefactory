import { collection, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';

import db from '../firebase.js.js';

export default function DBTest() {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      console.log(snapshot);
    });
    return unsubscribe;
  }, []);

  return <div>DBTest</div>;
}
