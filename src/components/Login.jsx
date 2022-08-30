import { Button } from "react-bootstrap"

export default function LoginButton(req, res){
    return(
        <>
        <Button id="loginButton" variant="primary" onClick={()=>{console.log('login')}}>Login</Button>
        </>
    )
}