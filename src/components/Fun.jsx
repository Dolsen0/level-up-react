import { useState } from 'react';
import { Card } from 'react-bootstrap';



export function Fun(){
    const[funTime, setFunTime] = useState(0)

    return(
        <>
        <Card bg='info' text='white' onClick={()=> setFunTime(funTime + 15)}>
            <Card.Header as="h6">Fun</Card.Header>
            <Card.Body id='fun'>{funTime}</Card.Body>  
        </Card>
        </>
    )
}