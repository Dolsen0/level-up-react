import { Card } from 'react-bootstrap';
import { useState } from 'react';


export function Physical(){
    const[physicalTime, setPhysicalTime] = useState(0);

    return(
        <>
        <Card bg='secondary' text='white' onClick={()=>{setPhysicalTime(physicalTime + 15)}}>
            <Card.Header as= "h6">Physical</Card.Header>
       <Card.Body id='physical'>{physicalTime}</Card.Body> 
        </Card>
        
        </>
    )
}