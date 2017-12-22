import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/index';
import Home from './containers/Home';
import About from './containers/About';
import Blog from './containers/Blog';
import Demo from './containers/Demo';
import './index.css';

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store} >
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/blog" component={Blog}/>
				<Route path="/demo" component={Demo}/>
			</Switch>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
