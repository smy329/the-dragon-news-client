import React, { useContext, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { user, setUser, logInWithEmail } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

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

  const handleLogin = (e) => {
    e.preventDefault();

    logInWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setLoginSuccess(true);
        setLoginError('');

        navigate(from || '/', { replace: true });
        console.log(from);
      })
      .catch((error) => {
        setLoginError(error.message);
        setLoginSuccess(false);
      });
  };
  return (
    <div>
      <NavigationBar />
      <Form className="container" onSubmit={handleLogin}>
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
          <Form.Check type="checkbox" label="Accept our Terms and Condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <br />
        {loginSuccess && (
          <Form.Text className="text-success">Successfully Logged in</Form.Text>
        )}
        <br />
        {loginError && (
          <Form.Text className="text-danger">{loginError}</Form.Text>
        )}
      </Form>
    </div>
  );
};

export default Login;
