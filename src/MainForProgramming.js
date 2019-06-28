import React from 'react';
import Activity from './Activity';

class MainForProgramming extends React.Component {
  render() {
    const ActivityList = [
      {
				name: 'Ruby',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
				name: 'JavaScript',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
      },
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

export default MainForProgramming;
