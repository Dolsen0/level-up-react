import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function Physical(){
    return(
        <>
        <Card bg='secondary'>
       <Card.Body id='physical' onClick={()=>{console.log("Physical")}}>Physical</Card.Body>  
        </Card>
        </>
    )
}