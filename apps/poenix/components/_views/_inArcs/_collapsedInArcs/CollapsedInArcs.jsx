import Image from 'next/image';
import React from 'react';

export default function CollapsedInArcs(props) {
  return (
    <div
      className="CollapsedInArcs"
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
                        'NW N'
                        'W C'
                    `,
        gridTemplateColumns: 'auto 35px',
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
        {false && <Image src="./collapsedInArcs.svg" alt="collapsed arcs" />}
        {true && (
          <Image
            src="./collapsedInArcs.svg"
            alt="collapsed arcs"
            onClick={(e) => {
              props.setExpanded(props.expandedState + 1);
            }}
          />
        )}

        <div
          style={{
            position: 'absolute',
            //zIndex:"1",
            left: '52px',
            top: '-8px',
            width: '90vw',
            // borderWidth: "1px",
            // borderStyle: "solid",
            textAlign: 'left',
            zIndex: '-1',
          }}
        >
          {props.dbInArcs.map((arc) => {
            return (
              <span
                key={arc.arcID}
                className={arc.type}
                style={{
                  //color: "yellowgreen",
                  fontFamily: 'Source Code Pro',
                  fontSize: '0.8em',
                }}
              >
                {arc.source_string}, &nbsp;
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
