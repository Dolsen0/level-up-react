import Card from 'react-bootstrap/Card';
import { useState } from 'react';



export function Creative(){
    const [creativeTime, setCreativeTime] = useState(0)
    return(
        <>
        <Card bg='warning' onClick={()=>{setCreativeTime(creativeTime + 15)}}>
       <Card.Body id='creative' variant="outline-primary">Creative</Card.Body>
       <p>{creativeTime}</p>  
        </Card>
        </>
    )
}