import { useState as useHookState } from '@hookstate/core';
import React from 'react';

import selected_arc from '../../../selected_arc_store.js.js';
import FetchArcs from './_fetchArcs/FetchArcs.jsx';

//
//
export default function Trees({ user, project }) {
  const selectedArc = useHookState(selected_arc);
  console.log('project: ' + project);
  return (
    <div
      className="Trees"
      style={{
        boxSizing: 'border-box',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderWidth: '0.1vw',
        padding: '5px',
        margin: '5px',
        width: '100%',
        height: '80vh',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          // padding: "5px",
          // margin: "5px",
          width: '100%',
          display: 'flex',
        }}
      >
        Trees Commponent
        <div
          style={{
            marginLeft: '20px',
          }}
        >
          Selected Arc:{' '}
          {selectedArc.get().sourceID +
            '--' +
            selectedArc.get().arcID +
            '->' +
            selectedArc.get().destID}
        </div>
        <button
          style={{
            marginLeft: '20px',
          }}
          onClick={(e) =>
            selectedArc.set({
              arcID: 'B',
              sourceID: 'A',
              destID: 'C',
            })
          }
        >
          test set arc
        </button>
      </div>
      <FetchArcs user={user} project={project} parentID="" />
    </div>
  );
}
