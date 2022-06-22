import { useState as useHookState } from '@hookstate/core';
import React from 'react';

import selected_arc from '../../../../utils/selected_arc_store.js';
import selected_nodes from '../../../../utils/selected_nodes_store.js';
import OutArcs from '../OutArcs.jsx';

//
export default function OutArc(props) {
  console.log('in OutArc with project = ' + props.project);
  console.log('OUtArc > props.generations: ', props.generations);
  console.log('OUtArc > props.columnID: ', props.columnID);
  const selectedNodes = useHookState(selected_nodes);
  const selectedArc = useHookState(selected_arc);
  // const random = Math.floor(Math.random() * 3)
  //var outArcImage = dominantGeneralizesOutArc
  function setSelectedNodesAndArc() {
    // selectedNodes.set(selectedNodes.get()[props.columnID+1] = props.arc.dest_string)
    const array = JSON.parse(JSON.stringify(selectedNodes.get()));
    //alert(props.arc.dest_string)
    array[props.columnID + 1] = props.arc.dest_string; //props.arc.dest_string
    //selectedNodes.set(["things[]", "thangs"])
    //alert("Array position 0 and 1 and 2: " + array[0] + " " +array[1] + " " +array[2])
    array.length = props.columnID + 2;
    selectedNodes.set(array);
    //alert("Array position 0 and 1 and 2: " + selectedNodes.get()[0]  + " " + selectedNodes.get()[1]  + " " + selectedNodes.get()[2])
    selectedArc.set({
      arcID: props.arc.arcID,
      sourceID: props.arc.source_string,
      destID: props.arc.dest_string,
    });
  }

  return (
    <div
      className="TopNode"
      style={{
        // left:"34%",
        // bottom:"50vh",
        // maxHeight:"90vh",
        // maxWidth:"33%",
        // borderWidth: "1px",
        // borderStyle: "solid",
        overflowX: 'visible',
        overflowY: 'visible',
        //textAlign: "right",
        display: 'grid',
        gridTemplateAreas: `
                        'C E'
                        'S SE'
                    `,
        gridTemplateColumns: '35px auto',
      }}
    >
      <div
        style={{
          gridArea: 'C',
          position: 'relative',
          // borderWidth: "1px",
          // borderStyle: "solid",
          textAlign: 'center',
          width: '31px',
          maxHeight: '20px',
          zIndex: '1',
        }}
        onClick={(e) => setSelectedNodesAndArc()}
      >
        (O)
        <div
          style={{
            position: 'absolute',
            //zIndex:"1",
            left: '52px',
            top: '0px',
            width: '90vw',
            // borderWidth: "1px",
            // borderStyle: "solid",
            textAlign: 'left',
            zIndex: '-1',
            whiteSpace: 'nowrap',
            paddingRight: '120vw',
          }}
        >
          <span
            style={{
              color: 'black',
              fontFamily: 'Source Code Pro',
              fontWeight: 'bold',
            }}
          >
            {props.arc.dest_string}
          </span>
          {/* <span
                        style={{
                            color:"orange",
                            fontFamily: 'Source Code Pro'
                        }} 
                    >
                        ghi
                    </span>
                    <span
                        style={{
                            color:"black",
                            fontFamily: 'Source Code Pro',
                            fontWeight: "bold"        
                        }} 
                    >
                        jklm nopq 
                    </span>
                    <span
                        style={{
                            color:"yellowgreen",
                            fontFamily: 'Source Code Pro'
                        }} 
                    >
                        rst uvw xyz
                    </span> */}
        </div>
      </div>

      <div
        style={{
          gridArea: 'SE',
          position: 'relative',
          // borderWidth: "1px",
          // borderStyle: "solid",
          textAlign: 'center',
        }}
      >
        <OutArcs
          user={props.user}
          project={props.project}
          columnID={props.columnID}
          sourceNode={props.arc.dest_string}
          generations={props.generations - 1}
        />
      </div>
    </div>
  );
}
