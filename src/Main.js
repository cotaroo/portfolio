import React from 'react';
import Activity from './Activity';

class Main extends React.Component {
  render() {
    const ActivityList = [
      {
				name: 'プログラミング',
				englishName: 'Programming',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
				name: '学業',
				englishName: 'Schoolwork',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
      },
      {
				name: '創作',
				englishName: 'Creation',
        introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>KOTARO YAMAMOTO ACTIVITIES</h1>
          </div>
          <div className='lesson-container'>
            <h3>山本浩太郎のかつどう</h3>
							{ActivityList.map((activityItem) => {
								return (
									<Activity
										name={activityItem.name}
										englishName={activityItem.englishName}
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
