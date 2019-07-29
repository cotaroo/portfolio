import React from 'react';
import Activity from '../Programming/Activity';
import posed from 'react-pose';

const props = {
  visible: { 
    opacity: 1,
    transition: {
      duration: 256
    }
  },
  hidden: { 
    opacity: 0,
    transition: {
      duration: 0
    }
  }
}

const Box = posed.div(props)

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: 'C：　大学の講義<br>Java： 大学の講義<br>Ruby：　Progate、参考書<br>HTML & CSS：　Progate<br>JavaScript：　ドットインストール、Udemy',
      isVisible: false
    };
  }

  handleClick(image, introduction){
    var timer_id;
	  var i = 0;
    timer_id = setInterval(() => {
      i++;
			if (i === 2) {
				clearInterval(timer_id);
			}
    this.setState({image: image, introduction: introduction, isVisible: !this.state.isVisible})
  }, 256);
  }

  render() {
    const ActivityList = [
      {
        name: 'プログラミング経験',
        englishName: 'Programming Skil',
        introduction: 'C：　大学の講義<br>Java： 大学の講義<br>Ruby：　Progate、参考書<br>HTML & CSS：　Progate<br>JavaScript：　ドットインストール、Udemy',
      },
      {
        name: '経歴',
        englishName: 'History',
        introduction: '2017年3月　大阪府立四條畷高校　卒業<br>2017年4月　同志社大学　情報システムデザイン学科　入学<br>2019年1月　独学でプログラミング開始<br>2019年7月　ポートフォリオ作成<br>2019年8月~9月　楽天インターン参加予定' 
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Profile</h1>
          </div>
          <div className='lesson-container'>
            <h3>プロフィール</h3>
							{ActivityList.map((activityItem) => {
								return (
									<Activity
                    name={activityItem.name}
                    englishName={activityItem.englishName}
										introduction={activityItem.introduction}
                    dataImages={() => {this.handleClick(activityItem.image, activityItem.introduction)}}
									/>
								);
              })}
              <div className='Image-card'>
                <Box  className='image-item' pose={this.state.isVisible ? 'hidden' : 'visible'}>
                  {this.state.introduction.split('<br>').map(function(line) {
                    return (<li>{line}</li>);
                  })}
                </Box>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
