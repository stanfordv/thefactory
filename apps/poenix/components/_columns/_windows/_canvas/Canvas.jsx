import React from 'react';

import InArcs from '../../../_views/_inArcs/InArcs.jsx';
import OutArcs from '../../../_views/_outArcs/OutArcs.jsx';

//import DBTest from "../../../_views/DBTest"
export default function Canvas(props) {
  console.log('in Canvas with project = ' + props.project);
  return (
    <div
      className="FocusView"
      style={{
        position: 'relative',
        width: '1%',
        // borderWidth: "1px",
        // borderStyle: "solid",
        //overflow: "scroll",
        overflowX: 'visible',
        overflowY: 'visible',
        paddingRight: '120vw',
        paddingTop: '15px',
        //minHeight: "100%",
        textAlign: 'right',
        display: 'grid',
        gridTemplateAreas: `
                        'NW N NE'
                        'W C E'
                        'SW S SE'
                    `,
        gridTemplateColumns: 'auto 35px auto',
        paddingBottom: '7px',
      }}
    >
      <div
        style={{
          gridArea: 'NW',
          // borderWidth: "0.1px",
          // borderStyle: "solid",
          textAlign: 'right',
        }}
      >
        {/* Canvas({props.columnID}) Node:{props.nodeString} */}
        {/* <InArcs generations={0} /> */}
        {/* <InArcsTemp
					user={props.user}
					project={props.project}
					columnID={props.columnID}
					generations='5'
					//sourceNode={props.nodeString}
					sourceNode={props.nodeString}
				/> */}
        <InArcs
          user={props.user}
          project="global" //{props.project}
          columnID={props.columnID}
          generations="5"
          //sourceNode={props.nodeString}
          sourceNode={props.nodeString}
        />
      </div>
      <div
        style={{
          gridArea: 'C',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        (O)
        <div
          style={{
            position: 'absolute',
            //zIndex:"1",
            left: '42px',
            top: '-2px',
            width: '33vw',
            // borderWidth: "2px",
            // margin: "0.9px",
            // borderStyle: "solid",
            textAlign: 'left',
            color: 'black',
            fontFamily: 'Source Code Pro',
            fontWeight: 'bold',
          }}
        >
          {props.nodeString}
        </div>
      </div>
      <div
        style={{
          gridArea: 'SE',
          // borderWidth: "0.1px",
          // margin: "0.9px",
          // borderStyle: "solid",
          textAlign: 'left',
        }}
      >
        <OutArcs
          user={props.user}
          project="global" //{props.project}
          columnID={props.columnID}
          generations="5"
          //sourceNode={props.nodeString}
          sourceNode={props.nodeString}
        />
      </div>
    </div>
  );
}
