import Button from 'react-bootstrap/Button';

export function Mental(){
    return(
        <>
       <Button id='mental' variant="outline-primary" onClick={()=>(console.log("mental"))}>Mental</Button>  
        </>
    )
}