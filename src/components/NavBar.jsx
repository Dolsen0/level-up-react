import  Container  from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"

export default function NavBar(){
    return(
        <>
        <Navbar bg="light" className="navbar" sticky="top" >
            <Container>
                <Navbar.Brand>Level Up</Navbar.Brand>
                <Navbar.Brand>User Name</Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}