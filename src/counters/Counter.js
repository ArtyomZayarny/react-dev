import React, {useState, Component,useRef} from 'react';
import Input from '../counters/Input'

const Counter = (props) => {
   
    let {min,max,calcTotal} = props;
    let [cnt,setCnt] = useState(min);
 
    const decrease = () =>{
        if (cnt > props.min) {
            setCnt(cnt - 1)
            calcTotal(cnt - 1);
        }
        
    }
  
    const increase = () => {

        if (cnt < props.max) {
            setCnt(cnt + 1); 
            calcTotal(cnt + 1)
        }  
          
       
    }
         
        return(
            <>
                <button onClick={() => {decrease()}}>-</button>
                    <Input cnt={cnt}/> 
                <input type="button" onClick={() => {increase()}} value="+"/>
            </> 
        )
    
    
}
export default Counter