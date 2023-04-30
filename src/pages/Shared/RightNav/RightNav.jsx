import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <div>
        <Button variant="outline-primary" className="mb-2 w-100">
          <FaGoogle /> &nbsp; Login with Google
        </Button>{' '}
        <Button variant="outline-dark" className="w-100">
          {' '}
          <FaGithub /> &nbsp; Login with Github
        </Button>
      </div>
      <h4 className="mt-4">Find Us On</h4>
      <div>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            &nbsp; Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            &nbsp; Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> &nbsp; Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
