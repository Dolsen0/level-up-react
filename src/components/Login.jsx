import { useState } from "react"
import { Button, ModalHeader } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import LoginForm from "./LoginForm.jsx";

export default function LoginButton(req, res){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
        <Button id="loginButton" variant="primary" onClick={handleShow}>
            Login
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm/>
            </Modal.Body>

        </Modal>
        </>
    )
}