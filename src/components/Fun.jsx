import { useState } from 'react';
import { Card } from 'react-bootstrap';



export function Fun(){
    const[funTime, setFunTime] = useState(0)

    return(
        <>
        <Card bg='info' onClick={()=> setFunTime(funTime + 15)}>
            <Card.Body id='fun'>Fun</Card.Body>  
            <p>{funTime}</p>
        </Card>
        </>
    )
}