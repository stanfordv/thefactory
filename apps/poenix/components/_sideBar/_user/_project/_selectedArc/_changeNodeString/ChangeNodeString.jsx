import { useState as useHookState } from '@hookstate/core';
import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useEffect, useState } from 'react';

import { db } from '../../../../../firebase';
import selected_arc from '../../../../../selected_arc_store.js.js';

export default function ChangeNodeString({ user, project, arcID, nodeString }) {
  const selectedArc = useHookState(selected_arc);
  const [active, setActive] = useState(false);
  const [fieldValue, setFieldValue] = useState();
  useEffect(() => {
    setFieldValue(nodeString);
  }, [nodeString]);
  async function changeStringInDB() {
    const newValue = fieldValue;
    const ref = doc(db, 'projects', project, 'arcs', arcID);
    updateDoc(ref, {
      dest_string: newValue,
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
        <button onClick={(e) => setActive(true)}>Change this instance</button>
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
          <button onClick={(e) => changeStringInDB()}>Change one</button>
          <button onClick={(e) => setActive(false)}>X</button>
        </>
      )}
    </>
  );
}
