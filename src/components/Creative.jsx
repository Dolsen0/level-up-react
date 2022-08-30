import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export function Creative(){
    return(
        <>
       <Button id='creative' variant="outline-primary" onClick={()=>{(console.log("Creative"))}}>Creative</Button>  
        </>
    )
}