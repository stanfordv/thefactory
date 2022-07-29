import React from 'react';

import AddArc from './_addArc/AddArc.jsx.js';
import AddParentArc from './_addArc/AddParentArc.jsx';

export default function SelectedDestNode({ user, project, nodeString }) {
  console.log('SelectedDestNode > nodeString: ', nodeString);
  return (
    <div
      style={{
        boxSizing: 'border-box',
        borderRadius: '5px',
        borderStyle: 'solid',
        borderWidth: '0.1vw',
        padding: '5px',
        width: '100%',
      }}
    >
      Dest Node: {nodeString}
      <AddParentArc
        user={user}
        project={project}
        destString={nodeString}
        label="Add parent arc:"
      />
      <AddArc
        user={user}
        project={project}
        sourceString={nodeString}
        label="Add child arc:"
      />
    </div>
  );
}
