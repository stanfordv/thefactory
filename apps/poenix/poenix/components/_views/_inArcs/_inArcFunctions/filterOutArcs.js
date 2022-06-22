import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';

import db from '../../../../utils/firebase.js';

export default function filterOutArcs(dbOutArcs, setFilteredOutArcs) {
  const tempFilteredArcs = [];
  dbOutArcs.forEach((outArc) => {
    const q = query(
      collection(db, 'projects', 'ben', 'arcs'),
      where('dest_string', '==', outArc.dest_string),
      orderBy('weighting', 'desc'),
      limit(1)
    );
    const tempInArc = {};
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        tempInArc.push({
          arcID: doc.id,
          ...doc.data(),
        });
      });
    });
    alert(tempInArc[0].arcID + ' and ' + outArc.arcID);
    if (tempInArc[0].arcID == outArc.arcID) {
      tempFilteredArcs.push(tempInArc[0]);
    }
    return unsubscribe;
  });
  setFilteredOutArcs(tempFilteredArcs);
}
