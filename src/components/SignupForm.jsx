import { useState } from "react";
import { Alert, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

export default function SignupForm(){
    
    const [form, setForm] = useState('')
    const handleFormSubmit = event => {
        event.preventDefault()
        console.log("clicking", form)

        fetch('https://level-up-do.web.app/user',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(form),    
        },[])
        .then(res => res.json())
        .then(data => console.log('success:', data ))
        .catch(err => console.error(err))
    }

    const handleForm = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    return(
        <>
        <Alert variant="primary">
            <Form>

            <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormControl 
                id="userFirstName" 
                type="text" 
                placeholder="Albert"
                onChange={handleForm}
                />
            </FormGroup>
            
            <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormControl 
                id="userLastName" 
                type="text" 
                placeholder="Einstein"
                onChange={handleForm}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl 
                id="emailSignup" 
                type="email" 
                placeholder="Albert@Mindspring.com"
                onChange={handleForm}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl 
                id="passwordSignup" 
                type="password" 
                placeholder="Password"
                onChange={handleForm} 
                />
            </FormGroup>

            <Button 
            variant="primary" 
            onClick={handleFormSubmit} 
            type="submit" 
            id="signup"
            >Signup</Button>

            </Form>
        </Alert>
        
        </>
    )
}

//must ensure if email is already in database a message appears informing user.