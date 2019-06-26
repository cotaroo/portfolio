import React from 'react';
import imgUrl from './images/icon.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <img src={imgUrl} alt="ICON" />
        </div>
      </div>
    );
  }
}

export default Header;
