import React, { useContext, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);

  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const { user, createUserWithEmail, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleName = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
    console.log(name);
  };
  const handlePhotoUrl = (e) => {
    const photoUrlInput = e.target.value;
    setPhotoUrl(photoUrlInput);
    console.log(photoUrl);
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    console.log(email);
  };
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    console.log(password);
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmail(email, password)
      .then((result) => {
        const registerUser = result.user;

        updateUserProfile(name, photoUrl)
          .then(() => console.log(registerUser))
          .catch((error) => {
            setRegError(error.message);
            setRegSuccess(false);
          });
        setRegSuccess(true);
        setRegError('');
        Navigate('/');
      })
      .catch((error) => {
        setRegError(error.message);
        setRegSuccess(false);
      });
  };
  return (
    <div>
      <NavigationBar />
      <Container className="w-50">
        <Form className="container" onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              value={photoUrl}
              onChange={handlePhotoUrl}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="accept"
              label="Accept our terms & conditions"
              onClick={handleAccepted}
            />
          </Form.Group>
          <Button variant="primary" disabled={!accepted} type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <br />
          {regSuccess && (
            <Form.Text className="text-success">
              Successfully Registered
            </Form.Text>
          )}
          <br />
          {regError && (
            <Form.Text className="text-danger">{regError}</Form.Text>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default Register;
