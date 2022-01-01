import React from 'react';
import { Result, Button } from 'antd';
import './notfound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div id="notfound">
      <div class="notfound-bg"></div>
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <Link to={`/`} class="home-btn">
          Go Home
        </Link>
        {/* <a href="#" class="home-btn">
          Go Home
        </a> */}
        {/* <a href="#" class="contact-btn">
          Contact us
        </a> */}
        <div class="notfound-social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
