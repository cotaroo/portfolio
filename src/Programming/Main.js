import React from 'react';
import Activity from '../Programming/Activity';
import Content from '../Programming/Content';

class Main extends React.Component {
  render() {
    const ActivityList = [
      {
        name: '晩ごはんカレンダー',
        englishName: 'Dinner Calendar',
        image: 'image for dinner calendar',
        introduction: 'introduction for dinner calendar'
      },
      {
        name: 'ポートフォリオ',
        englishName: 'Portofolio',
        image: 'image for portfolio',
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
									/>
								);
              })}
              {ActivityList.map((activityItem) => {
								return (
									<Content
                    image={activityItem.image}
										introduction={activityItem.introduction}
									/>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
