import Button from 'react-bootstrap/Button';


export function Fun(){
    return(
        <>
       <Button id='fun' variant="outline-primary" onClick={()=>{console.log("Fun!")}}>Fun</Button>  
        </>
    )
}