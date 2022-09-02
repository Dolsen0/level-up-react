import { Alert, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm(){
    return(
        <Alert variant="primary">   
        <Form>
            <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormControl type="email" placeholder="Email"/>
            </FormGroup>

            <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl type="password" placeholder="Password"/>
            </FormGroup>

            <Button variant="primary" onClick={()=>{console.log("logging in")}} type="submit">Login</Button>

        </Form>
        </Alert>
    )
}