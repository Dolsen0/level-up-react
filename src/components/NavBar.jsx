import { ButtonGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FirstName from "./FirstName.jsx";
import LoginButton from "./Login.jsx";
import SignupButton from "./SignupButton.jsx";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand>
            {" "}
            <h4>Level Up</h4>
          </Navbar.Brand>
          <Navbar.Brand>
            <h4>
              Hello <FirstName />
            </h4>
          </Navbar.Brand>
          <Navbar.Brand>
            {" "}
            <h4> {new Date().toLocaleDateString()} </h4>{" "}
          </Navbar.Brand>
          <div className="navButtons">
            <ButtonGroup>
              <LoginButton />
              <SignupButton />
            </ButtonGroup>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
