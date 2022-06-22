import Image from 'next/image.js';
import React from 'react';

import InArcs from '../InArcs.jsx';
import dominantComprisesInArc from './dominantComprisesInArc.svg';
import dominantGeneralizesInArc from './dominantGeneralizesInArc.svg';
import dominantQualifiesInArc from './dominantQualifiesInArc.svg';

export default function InArc(props) {
  console.log('InArc > props.generations: ', props.generations);
  const random = Math.floor(Math.random() * 4);
  var inArcImage = dominantGeneralizesInArc;
  if (random === 0) {
    inArcImage = dominantQualifiesInArc;
  } else if (random === 1) {
    inArcImage = dominantComprisesInArc;
  } else {
    inArcImage = dominantGeneralizesInArc;
  }
  return (
    <div
      className="InArc"
      style={{
        position: 'relative',
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
                        'NW N'
                        'W C'
                    `,
        gridTemplateColumns: 'auto 35px',
        zIndex: '12',
      }}
    >
      <div
        style={{
          gridArea: 'NW',
          position: 'relative',
          // borderWidth: "1px",
          // borderStyle: "solid",
          textAlign: 'center',
        }}
      >
        <InArcs generations={props.generations + 1} />
      </div>

      <div
        style={{
          gridArea: 'C',
          position: 'relative',
          // borderWidth: "1px",
          // borderStyle: "solid",
          textAlign: 'center',
          maxHeight: '20px',
        }}
      >
        <Image src={inArcImage} />

        <div
          style={{
            position: 'absolute',
            //zIndex:"1",
            left: '35px',
            top: '-6px',
            width: '33vw',
            // borderWidth: "1px",
            // borderStyle: "solid",
            textAlign: 'left',
            zIndex: '15',
          }}
        >
          <span
            style={{
              color: 'mediumorchid',
              fontFamily: 'Source Code Pro',
            }}
          >
            abcd ef
          </span>
          <span
            style={{
              color: 'orange',
              fontFamily: 'Source Code Pro',
            }}
          >
            <bold>ghi</bold>
          </span>
          <span
            style={{
              color: 'black',
              fontFamily: 'Source Code Pro',
              fontWeight: 'bold',
            }}
          >
            jklm nopq
          </span>
          <span
            style={{
              color: 'yellowgreen',
              fontFamily: 'Source Code Pro',
            }}
          >
            rst uvw xyz
          </span>
        </div>
      </div>
    </div>
  );
}
