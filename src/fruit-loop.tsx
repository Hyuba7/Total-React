import React from 'react';
import { render } from 'react-dom';

type FruitLoopsProps = {
  fruit:Array<string>
}

function FruitLopps(props: FruitLoopsProps) {
  

  return (
    <ul>
      {props.fruit.map((value, index) => {
        
        return <li key={index} style={{color:value}}>{value}</li>;
      })}
    </ul>
  );
}

export {
  FruitLopps
}
