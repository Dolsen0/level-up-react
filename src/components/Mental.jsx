// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export function Mental(){
    return(
        <>
        <Card bg='primary'>
            <Card.Body bg='secondary' id='mental' onClick={()=>(console.log("mental"))}>Mental</Card.Body>  
        </Card>
        </>
    )
}