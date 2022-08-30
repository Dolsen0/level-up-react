import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export function Fun(){
    return(
        <>
        <Card bg='info'>
            <Card.Body id='fun' onClick={()=>{console.log("Fun!")}}>Fun</Card.Body>  
        </Card>
        </>
    )
}