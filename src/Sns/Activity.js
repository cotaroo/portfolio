import React from 'react';
// import { Link } from 'react-router-dom';

class Activity extends React.Component {
  clickButton() {
    return this.props.dataImages();
  }
  render() {
    return (
      <span> 
      {/* <Link to='/'> */}
      <div className='Activity-card'
        button onClick={() => { this.clickButton(); }}>
        <div className='lesson-item'>
          <p>
            <div>{this.props.name}</div>
            <div className='englishName'>/{this.props.englishName}</div>
          </p>
        </div>
      </div>
      {/* </Link> */}
      </span>
    );
	}
}

export default Activity;