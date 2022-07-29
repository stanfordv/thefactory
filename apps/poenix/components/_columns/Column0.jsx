import { useState as useHookState } from '@hookstate/core';
import React from 'react';

import selected_nodes from '../../utils/selected_nodes_store.js';
import Window0 from './_windows/Window0.jsx';
import Column1 from './Column1.jsx';

//
export default function Column0(props) {
  console.log('in Column0 with project = ' + props.project);
  const selectedNodes = useHookState(selected_nodes);
  console.log('hi');
  return (
    <div
      style={{
        position: 'absolute',
        left: '0.2%',
        right: '0.2%',
        top: '0.3%',
        bottom: '0.3%',

        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        textAlign: 'left',
      }}
    >
      {/* Column0
			<br /> */}
      <Window0 user={props.user} project={props.project} columnID={0} />
      {/* if seleted_nodes length is greater than 1 then show column 1 */}
      {selectedNodes.get().length > 1 ? (
        <Column1 user={props.user} project={props.project} columnID={1} />
      ) : null}
    </div>
  );
}
