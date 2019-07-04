import React from 'react';
import Activity from '../Programming/Activity';
import DinnerCalendar from './image/Display for my schedule (Dinner Calendar).jpg';
import Portfolio from './image/top-page-for-portfolio.png';
import posed from 'react-pose';

const props = {
  visible: { 
    opacity: 1,
    transition: {
      duration: 512
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
    this.state = {image: DinnerCalendar,
                  introduction: 'introduction for dinner calendar',
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
  }, 512);
  }

  render() {
    const ActivityList = [
      {
        name: '晩ごはんカレンダー',
        englishName: 'Dinner Calendar',
        image: DinnerCalendar,
        introduction: 'introduction for dinner calendar'
      },
      {
        name: 'ポートフォリオ',
        englishName: 'Portofolio',
        image: Portfolio,
        introduction: 'introduction for portfolio'
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Programming</h1>
          </div>
          <div className='lesson-container'>
            <h3>プログラミング</h3>
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
                  <div>{this.state.introduction}</div>
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
