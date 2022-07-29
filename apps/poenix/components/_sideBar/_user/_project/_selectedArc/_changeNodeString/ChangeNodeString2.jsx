import { useState as useHookState } from '@hookstate/core';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react';

import { db } from '../../../../../firebase';
import selected_arc from '../../../../../selected_arc_store.js.js';

export default function ChangeNodeString({ user, project, nodeString }) {
  const selectedArc = useHookState(selected_arc);
  const [active, setActive] = useState(false);
  const [fieldValue, setFieldValue] = useState();
  useEffect(() => {
    setFieldValue(nodeString);
  }, [nodeString]);
  async function changeStringInDB() {
    const newValue = fieldValue;
    const q = query(
      collection(db, 'projects', project, 'arcs'),
      where('source_string', '==', nodeString)
    );
    const querySnapshot = await getDocs(q);
    const outArcs = [];
    await querySnapshot.forEach((doc) => {
      outArcs.push({
        arcID: doc.id,
        ...doc.data(),
      });
    });
    console.log('outArcs: ', outArcs);
    outArcs.forEach((arc) => {
      const ref = doc(db, 'projects', project, 'arcs', arc.arcID);
      updateDoc(ref, {
        source_string: newValue,
      });
    });
    const p = query(
      collection(db, 'projects', project, 'arcs'),
      where('dest_string', '==', nodeString)
    );
    const querySnapshot2 = await getDocs(p);
    const inArcs = [];
    await querySnapshot2.forEach((doc) => {
      inArcs.push({
        arcID: doc.id,
        ...doc.data(),
      });
    });
    inArcs.forEach((arc) => {
      const ref = doc(db, 'projects', project, 'arcs', arc.arcID);
      updateDoc(ref, {
        dest_string: newValue,
      });
    });
    selectedArc.set({
      arcID: '',
      sourceID: '',
      destID: newValue,
    });
  }
  return (
    <>
      {!active ? (
        <button onClick={(e) => setActive(true)}>Change all instances</button>
      ) : (
        <>
          <input
            type="text"
            value={fieldValue}
            //placeholder={nodeString}
            onChange={(e) => setFieldValue(e.currentTarget.value)}
            autoFocus
            //onFocus={e => e.currentTarget.select()}
          ></input>
          <button onClick={(e) => changeStringInDB()}>Change all</button>
          <button onClick={(e) => setActive(false)}>X</button>
        </>
      )}
    </>
  );
}
