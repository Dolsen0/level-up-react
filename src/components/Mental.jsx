// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useState } from 'react'

export function Mental(){

    const [mentalTime, setMentalTime] = useState(0)

    return(
        <>
        <Card bg='primary' onClick={()=>(setMentalTime(mentalTime + 1))}>
            <Card.Body bg='secondary' id='mental'>Mental</Card.Body>
            <p>{mentalTime}</p>  
        </Card>
        </>
    )
}