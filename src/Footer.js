import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            {/* <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/type_logo.png' alt="" /> */}
            {/* <p>Learn to code, learn to creative.</p> */}
          </div>
          <ul className='footer-list'>
            <span className='footer-link'>Engineer:</span>
            <li><a href='https://twitter.com/creataro54' target="_blank">
            <FontAwesomeIcon
                    color='#3eaded'
                    icon={faTwitterSquare} /></a></li>
            <li><a href='https://github.com/cotaroo' target="_blank">
            <FontAwesomeIcon
                    color='#333'
                    icon={faGithubSquare} /></a></li>
            <span className='footer-link'>Creator:</span>
            <li><a href='https://twitter.com/Creataro1' target="_blank">
            <FontAwesomeIcon
                    color='#3eaded'
                    icon={faTwitterSquare} /></a></li>
           <li><a href='https://www.instagram.com/creataro54'target="_blank">
            <FontAwesomeIcon
                    color='#3f729b'
                    icon={faInstagram} /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
