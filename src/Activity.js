import React from 'react';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    // モーダルウィンドウを表示するかどうかの状態と
    // コンポーネントにカーソルが乗ているかどうかの状態を持たせる
    this.state = {isModalOpen: false, hovered: false};
  }

  handleClickActivity() {
    this.setState({isModalOpen: true});
  }
  
  handleClickClose() {
    this.setState({isModalOpen: false})
    
  }
  // カーソルが乗った時に状態を変更するイベントハンドラ
  onMouseEnter() {
    this.setState({hovered: true});
  }

  // カーソルが外れた時に状態を変更するイベントハンドラ
  onMouseLeave() {
    this.setState({hovered: false});
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
            {/* onClickイベントを追加してください */}
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

    // ボタンに onMouseEnter と onMouseLeave のイベントハンドラを割り当てます
    return (
      <div className='Activity-card'>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickActivity()}}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          {this.state.hovered ? <p>{this.props.name} / {this.props.englishName}</p> : <p>{this.props.name}</p>}
        </div>
        {modal}
      </div>
    );
  }
}

export default Activity;