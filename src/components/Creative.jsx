import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';



export function Creative(){
    
    const [creativeTime, setCreativeTime] = useState(0)

    useEffect(() => {
        console.log(`you clicked ${creativeTime}`)
    });

    return(
        <>
        <Card bg='warning' text='white' onClick={()=>{setCreativeTime(creativeTime + 15)}}>
            <Card.Header as="h6">Creative</Card.Header>
       <Card.Body id='creative' variant="outline-primary">{creativeTime}</Card.Body>
        </Card>
        </>
    )
}