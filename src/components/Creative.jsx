import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export function Creative(){
    return(
        <>
        <Card bg='warning'>
       <Card.Body id='creative' variant="outline-primary" onClick={()=>{(console.log("Creative"))}}>Creative</Card.Body>  
        </Card>
        </>
    )
}