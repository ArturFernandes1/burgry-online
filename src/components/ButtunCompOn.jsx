import React from 'react';
import "./ButtunCompOn.css"

const ButtunCompOn = ({ className, style }) => {
  return (
    <button className={`buttuon-comp-on ${className}`} style={style}>
          Comprar
      </button>
  );
};
export default ButtunCompOn;