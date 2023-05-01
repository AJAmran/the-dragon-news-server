import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accept, setAccept] = useState(false);

  const handleAccept = (event)=>{
    setAccept(event.target.checked)
    console.log(event.target.checked)
  }


const handleSubmit = (event)=>{
  event.preventDefault();
  const form = event.target 
  const email = form.email.value
  const password = form.password.value;
  createUser(email, password)
  .then(result =>{
    const createdUser = result.user
    console.log(createdUser)
  })
  .catch(error =>{
    console.error(error);
  })
  console.log(email, password)
  form.reset();
}
    return (
        <Container className="w-25 mx-auto">
        <h3>Please Register.</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter your photo url" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccept} name="accept" type="checkbox" label={<>Accept  <Link to='/terms' required>Terms and Condition</Link></>} />
        </Form.Group>
        <Button variant="primary" disabled={!accept} type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-success">
            
          </Form.Text>
        <Form.Text className="text-success">
            Already Have an Account <Link to="/login">Login</Link>
          </Form.Text>
        <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;