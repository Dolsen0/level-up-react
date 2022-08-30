import { Button } from "react-bootstrap"
import LoginForm from "./LoginForm"

export default function LoginButton(req, res){
    return(
        <>
        <Button id="loginButton" variant="primary" onClick={()=>{console.log('login')}}>Login</Button>
        </>
    )
}