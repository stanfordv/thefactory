import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

import db from '../../../../utils/firebase.js';

export default function fetchInArcs(user, project, destNode, setInArcs) {
  const q = query(
    collection(db, 'projects', project, 'arcs'),
    where('dest_string', '==', destNode),
    orderBy('weighting', 'desc')
  );
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const tempDbArcs = [];
    snapshot.forEach((doc) => {
      tempDbArcs.push({
        arcID: doc.id,
        ...doc.data(),
      });
    });
    console.log('Numer of arcs fetched: ' + tempDbArcs.length);
    setInArcs(tempDbArcs);
  });
  return unsubscribe;
}
