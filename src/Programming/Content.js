import React from 'react';
// import { Link } from 'react-router-dom';

class Content extends React.Component {

  render(){
      return(
        <div classname='content'>
        <div className='image'>{this.props.image}</div>
        <div className='introduction'>{this.props.introduction}</div>
        </div>
      );
  }
}

export default Content;