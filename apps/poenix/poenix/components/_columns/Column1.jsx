import { useState as useHookState } from '@hookstate/core';
import React from 'react';
import { useEffect, useState } from 'react';

import selected_nodes from '../../utils/selected_nodes_store.js';
import Window from './_windows/Window.jsx';

//
//import { arrayUnion } from "firebase/firestore"
//import Column2 from "./Column2.jsx"

export default function Column1(props) {
  const selectedNodes = useHookState(selected_nodes);
  //const ColumnsOpen = useHookState(windowsOpen)
  //const leftPercent = "42%"
  const [style, setStyle] = useState({
    position: 'absolute',
    right: '0.2%',
    top: '0.3%',
    bottom: '0.3%',
    //left: "50%",
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    paddingBottom: '10px',
    background: 'white',
    opacity: '0.85',
    zIndex: '20',
    boxShadow: '-3px -3px 50px 5px grey',
    textAlign: 'left',
    resize: 'horizontal',
    overflow: 'auto',
    direction: 'rtl',
  });
  //alert("windowsOpen: " + windowsOpen.get())
  const wO = selectedNodes.get().length - props.columnID;
  useEffect(() => {
    if (wO === 0) {
      setStyle({ ...style, width: '10%' });
    }
    if (wO === 1) {
      setStyle({ ...style, width: '50%' });
    }
    if (wO === 2) {
      //alert("wO === 2")
      setStyle({ ...style, width: '66%' });
    } else if (wO === 3) {
      setStyle({ ...style, width: '75%' });
    } else if (wO === 4) {
      setStyle({ ...style, width: '80%' });
    } else if (wO === 5) {
      setStyle({ ...style, width: '83.3%' });
    } else if (wO === 6) {
      setStyle({ ...style, width: '85.71%' });
    } else if (wO === 7) {
      setStyle({ ...style, width: '87.5%' });
    } else {
      setStyle({ ...style, width: '88.89%' });
    }
  }, [wO]);
  function closeColumn() {
    const array = JSON.parse(JSON.stringify(selectedNodes.get()));
    array.length = props.columnID;
    //alert("Array position 0 and 1 and 2: " + array[0] + " " +array[1] + " " +array[2])
    selectedNodes.set(array);
    //alert("Array position 0 and 1 and 2: " + selectedNodes.get()[0]  + " " + selectedNodes.get()[1]  + " " + selectedNodes.get()[2])
  }

  const nodeString = selectedNodes.get()[props.columnID];

  return (
    <div style={style}>
      {/* Column({props.columnID}) :: ColumnsOpen: {selectedNodes.get().length} ::
			Node: {nodeString} */}
      <button
        onClick={(e) => {
          closeColumn();
        }}
      >
        X
      </button>
      <div
        style={{
          position: 'absolute',
          right: '1px',
          top: '15px',
          left: '1px',
          bottom: '10px',
          overflow: 'auto',
          border: '1px solid red',
        }}
      >
        <Window
          nodeString={selectedNodes.get()[props.columnID]}
          columnID={props.columnID}
          user={props.user}
          project={props.project}
        />
        {/* <Window
					nodeString={selectedNodes.get()[props.columnID]}
					columnID={props.columnID}
					user={props.user}
					project={props.project}
				/>
				<Window
					nodeString={selectedNodes.get()[props.columnID]}
					columnID={props.columnID}
					user={props.user}
					project={props.project}
				/> */}
      </div>
      {selectedNodes.get().length > props.columnID + 1 ? (
        <Column1
          user={props.user}
          project={props.project}
          nodeString={nodeString}
          columnID={props.columnID + 1}
        />
      ) : null}
    </div>
  );
}
