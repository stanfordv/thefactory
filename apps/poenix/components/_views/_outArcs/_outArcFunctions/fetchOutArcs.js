import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

import db from '../../../../utils/firebase';

export default function fetchOutArcs(user, project, sourceNode, setOutArcs) {
  const q = query(
    collection(db, 'projects', project, 'arcs'),
    where('source_string', '==', sourceNode),
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
    setOutArcs(tempDbArcs);
  });
  return unsubscribe;
}
