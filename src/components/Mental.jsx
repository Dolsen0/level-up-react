// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import { useEffect } from 'react'

export function Mental(){

    const [mentalTime, setMentalTime] = useState(0)

    useEffect(()=>{
        console.log(`you clicked mental worth ${mentalTime} points`)
    })

    return(
        <>
        <Card bg='primary' text='white' onClick={()=>(setMentalTime(mentalTime + 15))}>
            <Card.Header as= "h6">Mental</Card.Header>
            <Card.Body bg='secondary' id='mental'>{mentalTime}</Card.Body> 
        </Card>
        </>
    )
}