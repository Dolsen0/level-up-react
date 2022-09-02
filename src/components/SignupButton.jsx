import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import SignupForm from "./SignupForm.jsx";

export default function SignupButton(){
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    
    

    return(
        <>
        <Button id="signupButton" variant="primary" onClick={handleShow}>Signup</Button>
        
        <Modal show = {show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Signup</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SignupForm />
            </Modal.Body>

        </Modal>
        
        
        </>
    )
}