import { Alert, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

export default function SignupForm(){
    return(
        <>
        <Alert variant="primary">
            <Form>

            <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormControl id="userFirstName" type="text" placeholder="Albert"/>
            </FormGroup>
            
            <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormControl id="userLastName" type="text" placeholder="Einstein"/>
            </FormGroup>

            <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl id="emailSignup" type="email" placeholder="Albert@Mindspring.com"/>
            </FormGroup>

            <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl id="passwordSignup" type="password" placeholder="Password" />
            </FormGroup>

            <Button variant="primary" onClick={()=>{console.log('upload user info.')}} type="submit" id="signup">Signup</Button>

            </Form>
        </Alert>
        
        </>
    )
}

//must ensure if email is already in database a message appears informing user.