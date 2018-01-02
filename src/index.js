import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './redux/reducers/index';
import Home from './components/Home';
import About from './components/About';
import BlogContainer from './components/Blog/index.container';
import ArticleContainer from './components/Article/index.container';
import './css/index.css';
import './css/shared.css';

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
				<Route exact path="/blog" component={BlogContainer}/>
				<Route path="/blog/tag/:tagName" component={BlogContainer}/>
				<Route path="/article/:articleId" component={ArticleContainer}/>
			</Switch>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
