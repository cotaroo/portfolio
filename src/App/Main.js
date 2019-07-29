import React from 'react';
import Activity from './Activity';

class Main extends React.Component {
  render() {
    const ActivityList = [
      {
				name: 'プログラミング',
				englishName: 'Programming',
        url: '/programming'
      },
      {
				name: '学業',
				englishName: 'Schoolwork',
        url: '/schoolwork'
      },
      {
				name: '創作',
				englishName: 'Creation',
        url: '/creation'
      },
      {
				name: 'ＳＮＳ',
				englishName: 'Social Media',
        url: '/sns'
      },
      {
				name: 'プロフィール',
				englishName: 'Profile',
        url: '/profile'
      }
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>COTARO YAMAMOTO ACTIVITIES</h1>
          </div>
          <div className='lesson-container'>
            <h3>山本浩太郎のかつどう</h3>
							{ActivityList.map((activityItem) => {
								return (
									<Activity
										name={activityItem.name}
										englishName={activityItem.englishName}
                    url={activityItem.url}
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
