import React from 'react';

export default function WhatDoing(props) {
  return (
    <>
      <div className="h-auto px-4 py-6 gap-2 flex flex-col items-center rounded-lg border-2 border-dashed">
        {props.children}
        <h3 className="lg:text-lg font-semibold">{props.title} </h3>
        <p className="text-left" style={{ whiteSpace: 'pre-wrap' }}>
          {props.desc
            .replace(/<br\s*\/?>/gi, '\n') // convert <br> tags to \n
            .split('\n')
            .map((line, index) => (
              <React.Fragment key={index}>
                {line.replace(/ {2,}/g, ' ')} {/* replace 2 or more spaces with non-breaking space */}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>
    </>
  );
}
