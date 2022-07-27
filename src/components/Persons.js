import { Button } from "react-bootstrap";
import React from "react";
import {useState, useEffect} from 'react'

function Persons (){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      alert('You have changed the counter to' + counter)
    }, [counter])
    return(
        <>
        <Button onClick={() => setCounter((prevCount) => prevCount -1)}>-</Button>
      <h2>{counter}</h2>
      <Button onClick={() => setCounter((prevCount) => prevCount +1)}>+</Button>
        </>
    )
}
export default Persons;