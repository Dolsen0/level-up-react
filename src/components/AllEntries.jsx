import { Button } from "react-bootstrap"

export default function AllEntries(){
    return(
        <>
        <Button onClick={()=>{console.log("bring to all categories update")}} >Update All</Button>
        </>
    )
}