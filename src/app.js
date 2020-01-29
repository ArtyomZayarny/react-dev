import React from 'react';
import CounterClass from './counters/class'
import CounterFunction from './counters/Counter'




export default function(props) {

    return (
        <div>
           
            <CounterFunction min={1} max={5}/>
        </div>
    )
     
}