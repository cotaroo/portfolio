import React from 'react';
import Activity from '../Programming/Activity';
import the54jiNoMonogatari from './image/54jiNoMonogatari.jpg';
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
    this.state = {image: the54jiNoMonogatari,
                introduction: '９×６の「正方形の原稿用紙」に収められた物語<br>2作品が『５４字の物語　参』に掲載<br>１作品がテレビ番組『アップ！』にて紹介<br>作品はTwitterやInstagramで公開中！' ,
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
        name: '54字の物語',
        englishName: '54JI NO MONOGATARI',
        image: the54jiNoMonogatari,
        introduction: '９×６の「正方形の原稿用紙」に収められた物語<br>2作品が『５４字の物語　参』に掲載<br>１作品がテレビ番組『アップ！』にて紹介<br>作品はTwitterやInstagramで公開中！'
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Creation</h1>
          </div>
          <div className='lesson-container'>
            <h3>創作</h3>
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
