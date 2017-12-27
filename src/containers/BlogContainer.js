import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/actions';
import Blog from '../components/blog/Blog';

class BlogContainer extends React.Component {
	
	componentDidMount(){
		// getArticles();
	}
	
	componentDidUpdate(){
		
	}
	
	render(){
		return(<Blog/>);
	}
	
}

const mapStateToProps = (state, ownProps) => {
	const { articles } = state;
	return {
		articles
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getArticles: () => {
			dispatch(getArticles(ownProps.filter))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BlogContainer);