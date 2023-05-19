import { React, useEffect, useState } from 'react';
import './index.css';
import logo from './img/logo1.png'
import bg from './img/logoed.gif'
function FakeApp() {

    const queries=[
        {
            id:1,
            ques:"Hello",
            res:"Welcome",
        },
        {
            id:1,
            ques:"Hello",
            res:"jai",
        },
        {
            id:1,
            ques:"Hello",
            res:"hai",
        }
    ]
    
  const [data, setData] = useState("");
  const [que, setQuer] = useState(" ");
 



  const getData = (event) => {
    console.log(event);
    setQuer(event.value)
    console.log(que); 
}
  
  return (
    <div className='App'>
      
      <div className="container" >
        
        <input
          className='text'
          placeholder='enter query'
          value={que}
          onChange={getData}
       
        />

      </div>

     

    </div>
  );
}

export default FakeApp;
