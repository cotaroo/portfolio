import React from 'react';
// import imgUrl from './images/icon.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div class="gnav__menu__item"><a href="/">
            <div>COTARO YAMAMOTO ACTIVITIES</div>
            <div className='japaneseName'>山本浩太郎のかつどう</div>
            </a></div>
        <nav class="gnav">
        <ul class="gnav__menu">
            <li class="gnav__menu__item"><a href="/">
            <div>TopPage</div>
            <div className='japaneseName'>トップ</div>
            </a></li>
            <li class="gnav__menu__item"><a href="/programming">
            <div>Programming</div>
            <div className='japaneseName'>プログラミング</div>
            </a></li>
            <li class="gnav__menu__item"><a href="/schoolwork">
            <div>Schoolwork</div>
            <div className='japaneseName'>学業</div>
            </a></li>
            <li class="gnav__menu__item"><a href="/creation">
            <div>Creation</div>
            <div className='japaneseName'>創作</div></a></li>
            <li class="gnav__menu__item"><a href="/sns">
            <div>Social Media</div>
            <div className='japaneseName'>SNS</div></a></li>
            <li class="gnav__menu__item"><a href="/profile">
            <div>Profile</div>
            <div className='japaneseName'>プロフィール</div></a></li>
        </ul>
    </nav>
      </div>
    );
  }
}

export default Header;
