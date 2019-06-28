import React from 'react';
import { Link } from 'react-router-dom';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickActivity() {
    this.setState({isModalOpen: true})
  }
  
  handleClickClose() {
    this.setState({isModalOpen: false})
  }

  handleToAboutPage = () => {
    this.props.history.push('/programming')
  }


  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => {this.handleClickClose()}}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }


    return (
      <span> 
      <Link to ="/programming" >
      <div className='Activity-card'>
        <div className='lesson-item'>
          <p>
            <div>{this.props.name}</div>
            <div className='englishName'>/{this.props.englishName}</div>
          </p>
        </div>
      </div>
      {modal}
      </Link>
      </span>
    );
  }
}

export default Activity;