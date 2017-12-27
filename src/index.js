import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './redux/reducers/index';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Demo from './components/demo/Demo';
import './index.css';

const store = createStore(
	reducer,
	applyMiddleware(
		thunk,
		createLogger()
	)
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
