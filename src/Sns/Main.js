import React from 'react';
import Activity from '../Programming/Activity';
import AsEngineer from './image/AsEngineer.jpg';
import AsCreater from './image/AsCreater.jpg';
import posed from 'react-pose';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

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
    this.state = {image: AsEngineer,
                  account:[{name: faTwitterSquare, url: 'https://twitter.com/creataro54',color: '#3eaded'},
                  {name: faGithubSquare, url: 'https://github.com/cotaroo',color: '#333'}]
                };
              }

  handleClick(image, account){
    var timer_id;
	  var i = 0;
    timer_id = setInterval(() => {
      i++;
			if (i === 2) {
				clearInterval(timer_id);
			}
    this.setState({image: image, account: account, isVisible: !this.state.isVisible})
  }, 256);
  }

  render() {
    const ActivityList = [
      {
        name: 'エンジニア用アカウント',
        englishName: 'As Engineer',
        image: AsEngineer,
        account:[{name: faTwitterSquare, url: 'https://twitter.com/creataro54',color: '#3eaded'},
                  {name: faGithubSquare, url: 'https://github.com/cotaroo',color: '#333'}]
      },
      {
        name: 'クリエイター用アカウント',
        englishName: 'As Creator',
        image: AsCreater,
        account:[{name: faTwitterSquare, url: 'https://twitter.com/Creataro1',color: '#3eaded'},
        {name: faInstagram, url: 'https://www.instagram.com/creataro54',color:'#3f729b'}]
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>SNS</h1>
          </div>
          <div className='lesson-container'>
            <h3>ソーシャルアカウント</h3>
							{ActivityList.map((activityItem) => {
								return (
									<Activity
                    name={activityItem.name}
                    englishName={activityItem.englishName}
                    image={activityItem.image}
										account={activityItem.account}
                    dataImages={() => {this.handleClick(activityItem.image, activityItem.account)}}
									/>
								);
              })}
              <div className='Image-card'>
                {/* <div className='image-item'> */}
                <Box  className='image-item' pose={this.state.isVisible ? 'hidden' : 'visible'}>
                  <img src={this.state.image} alt='' />
                  <div></div>
                    {this.state.account.map((account)=>{
                    return <span className='sns-icon'><a href={account.url} target="_blank"><FontAwesomeIcon
                    color={account.color}
                    icon={account.name} /></a></span>})}
                </Box>
                
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
