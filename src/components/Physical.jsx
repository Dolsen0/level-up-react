import Button from 'react-bootstrap/Button';

export function Physical(){
    return(
        <>
       <Button id='physical' variant="outline-primary" onClick={()=>{console.log("Physical")}}>Physical</Button>  
        </>
    )
}