import React from 'react';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false
    };
  }

  handleClickActivity() {
    this.setState({isModalOpen: true});
  }
  
  handleClickClose() {
    this.setState({isModalOpen: false})
    
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
      <div className='Activity-card'>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickActivity()}}
        >
          <p>
            {this.props.name}
            <div className='englishName'>/{this.props.englishName}</div>
          </p>
        </div>
        {modal}
      </div>
    );
  }
}

export default Activity;