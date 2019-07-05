import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App/App';
import Programming from './Programming/App';
import Schoolwork from './Schoolwork/App';
import Creation from './Creation/App';
import Sns from './Sns/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
		<Route exact path='/' component={App} />
		<Route path='/programming' component={Programming} />
		<Route path='/schoolwork' component={Schoolwork} />
		<Route path='/creation' component={Creation} />
		<Route path='/sns' component={Sns} />
		</Switch>
	</BrowserRouter>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
