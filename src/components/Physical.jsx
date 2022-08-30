import { Card } from 'react-bootstrap';
import { useState } from 'react';


export function Physical(){
    const[physicalTime, setPhysicalTime] = useState(0);

    return(
        <>
        <Card bg='secondary' onClick={()=>{setPhysicalTime(physicalTime + 15)}}>
       <Card.Body id='physical'>Physical</Card.Body>  
       <p>{physicalTime}</p>
        </Card>
        </>
    )
}