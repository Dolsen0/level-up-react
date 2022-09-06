import { ButtonGroup } from "react-bootstrap";
import  Container  from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"
import FirstName from "./FirstName.jsx";
import LoginButton from "./Login.jsx";
import SignupButton from "./SignupButton.jsx";


export default function NavBar(){
    
    return(
        <>
        <Navbar bg="light" className="navbar" sticky="top" >
            <Container>
                <Navbar.Brand>Level Up</Navbar.Brand>
                <Navbar.Brand>
                    <FirstName/>
                    </Navbar.Brand>
                <Navbar.Brand>{new Date().toLocaleDateString()}</Navbar.Brand>
                <div className="navButtons">
                <ButtonGroup>
                    <LoginButton/>
                    <SignupButton/>
                </ButtonGroup>
                </div>
                
            </Container>
        </Navbar>
        </>
    )
}