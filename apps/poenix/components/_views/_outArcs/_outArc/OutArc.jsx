import { useState as useHookState } from '@hookstate/core';
import Image from 'next/image';
import React from 'react';

import selected_arc from '../../../../utils/selected_arc_store';
import selected_nodes from '../../../../utils/selected_nodes_store';
import longestCommonSubstring from '../../../_columns/_windows/longestCommonSubstring';
import OutArcs from '../OutArcs.jsx';
import dominantBlackOutArc from './_outArcSVGs/dominantBlackOutArc.svg';
import dominantComprisesOutArc from './_outArcSVGs/dominantComprisesOutArc.svg';
import dominantGeneralizesOutArc from './_outArcSVGs/dominantGeneralizesOutArc.svg';
import dominantQualifiesOutArc from './_outArcSVGs/dominantQualifiesOutArc.svg';

//

export default function OutArc(props) {
  console.log('in OutArc with project = ' + props.project);
  console.log('OUtArc > props.generations: ', props.generations);
  console.log('OUtArc > props.columnID: ', props.columnID);
  const selectedNodes = useHookState(selected_nodes);
  const selectedArc = useHookState(selected_arc);
  // const random = Math.floor(Math.random() * 3)
  var outArcImage = dominantGeneralizesOutArc;
  if (props.arc.type === 'generalizes') {
    outArcImage = dominantGeneralizesOutArc;
  } else if (props.arc.type === 'qualifies') {
    outArcImage = dominantQualifiesOutArc;
  } else if (props.arc.type === 'comprises') {
    outArcImage = dominantComprisesOutArc;
  } else {
    outArcImage = dominantBlackOutArc;
  }
  longestCommonSubstring('Hmappy', 'MMmapp');

  var color = 'black';
  if (props.arc.type === 'generalizes') {
    color = 'mediumorchid';
  } else if (props.arc.type === 'qualifies') {
    color = 'orange';
  } else if (props.arc.type === 'comprises') {
    color = 'yellowgreen';
  } else {
    color = 'black';
  }
  var text = props.arc.dest_string;
  var newText = props.arc.dest_string;
  var largestCommonSubstring = longestCommonSubstring(
    props.arc.dest_string,
    props.arc.source_string
  );
  if (largestCommonSubstring.length > 3) {
    var newSubstring =
      "<span style='font-weight:normal; color:" +
      color +
      "'>" +
      largestCommonSubstring +
      '</span>';
    newText = text.replace(largestCommonSubstring, newSubstring);
  }
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
      className="OutArc"
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
        <Image src={outArcImage} alt={props.arc.type + ' arc'} />

        <div
          style={{
            position: 'absolute',
            //zIndex:"1",
            left: '52px',
            top: '4px',
            width: '90vw',
            // borderWidth: "1px",
            // borderStyle: "solid",
            textAlign: 'left',
            zIndex: '-1',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              color: 'black',
              fontFamily: 'Source Code Pro',
              fontWeight: 'bold',
            }}
            dangerouslySetInnerHTML={{ __html: newText }}
          >
            {/* {newText} */}
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
          textAlign: 'left',
        }}
      >
        <b>{props.user}</b>
        {props.project}
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
