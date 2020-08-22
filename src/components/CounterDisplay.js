import React from 'react';
import {useSelector} from 'react-redux'


function CounterDisplay() {
    const counter = useSelector((state)=>{
        return state.counter
    })
  return (
    <div >
        Counter Display {counter}
    </div>
  );
}

export default CounterDisplay;
