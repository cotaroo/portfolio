import React from 'react';
import Activity from '../Programming/Activity';
import CasinoGame from './image/CasinoGame.png';
import HandPushingSumoGame from './image/HandPushingSumoGame.png';
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
    this.state = {image: CasinoGame,
                introduction: 'カジノゲームが遊べるコンソールアプリ<br>開発期間:2017/12 下旬~2018/1 上旬<br>Javaの授業でグループで開発<br>担当：カジノゲーム、所持金管理機能' ,
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
        name: 'カジノゲーム',
        englishName: 'Casino Game',
        image: CasinoGame,
        introduction: 'カジノゲームが遊べるコンソールアプリ<br>開発期間:2017/12 下旬~2018/1 上旬<br>Javaの課題で開発<br>グループ開発　担当：カジノゲーム,所持金管理'
      },
      {
        name: '手押し相撲ゲーム',
        englishName: 'Hand Pushing Sumo Game',
        image: HandPushingSumoGame,
        introduction: 'GBAで遊べる手押し相撲ゲーム<br>開発期間:2019/1 下旬~2019/2 上旬<br>C言語の課題で開発<br>VBAというエミュレータ上で実行しながら開発'
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Schoolwork</h1>
          </div>
          <div className='lesson-container'>
            <h3>学業</h3>
							{ActivityList.map((activityItem) => {
								return (
									<Activity
                    name={activityItem.name}
                    englishName={activityItem.englishName}
                    image={activityItem.image}
										introduction={activityItem.introduction}
                    dataImages={() => {this.handleClick(activityItem.image, activityItem.introduction)}}
									/>
								);
              })}
              <div className='Image-card'>
                {/* <div className='image-item'> */}
                <Box  className='image-item' pose={this.state.isVisible ? 'hidden' : 'visible'}>
                  <img src={this.state.image} alt='' />
                  {/* <div>{this.state.introduction}</div> */}
                  {this.state.introduction.split('<br>').map(function(line) {
                    return (<li>{line}</li>);
                  })}
                </Box>
                {/* </div> */}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
