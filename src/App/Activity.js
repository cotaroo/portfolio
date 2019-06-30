import React from 'react';
import { Link } from 'react-router-dom';

class Activity extends React.Component {

  // handleToPage = () => {
  //   this.props.history.push(this.props.url)
  // }

  render() {
    return (
      <span> 
      <Link to ={this.props.url} >
      <div className='Activity-card'>
        <div className='lesson-item'>
          <p>
            <div>{this.props.name}</div>
            <div className='englishName'>/{this.props.englishName}</div>
          </p>
        </div>
      </div>
      </Link>
      </span>
    );
  }
}

export default Activity;