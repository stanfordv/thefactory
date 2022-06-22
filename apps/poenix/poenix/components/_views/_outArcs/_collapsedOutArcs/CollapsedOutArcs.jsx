import Image from 'next/image';
import React from 'react';

import collapsedOutArcs from './collapsedOutArcs.svg';

export default function CollapsedOutArcs(props) {
  return (
    <div
      className="CollapsedOutArcs"
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
          maxHeight: '14px',
          zIndex: '1',
        }}
      >
        {/* <img 
                    src={outArcImage}
                    alt="generalizes, qualifies or comprises arc" 
                /> */}
        {false ? <Image src={collapsedOutArcs} alt="collapsed arcs" /> : null}
        {true ? (
          <Image
            src={collapsedOutArcs}
            alt="collapsed arcs"
            onClick={(e) => {
              props.setExpanded(props.expandedState + 1);
            }}
          />
        ) : null}

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
          }}
        >
          {props.dbOutArcs.map((arc) => {
            return (
              <span
                key={arc.arcID}
                className={arc.type}
                style={{
                  //color: "yellowgreen",
                  fontFamily: 'Source Code Pro',
                  fontSize: '0.8em',
                  whiteSpace: 'nowrap',
                }}
              >
                {arc.dest_string}, &nbsp;
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
