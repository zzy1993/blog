import React from 'react';
import {connect} from 'react-redux';
import Blog from './';
import { getArticles, getTags, getTag, setPageNumber } from '../../redux/actions';

class BlogContainer extends React.Component {

	componentDidMount() {
		const {pageSize, pageNumber} = this.props;
		this.props.getArticles(pageSize, pageNumber);
		this.props.getTags();
	}

	render() {
		const { tagName } = this.props.match.params;
		return (
			<Blog {...this.props} tagName={tagName}/>
		);
	}
}

const mapStateToProps = (state) => {
	const { blog } = state;
	return {
		...blog,
	}
};

const mapDispatchToProps = (dispatch) => ({
	getArticles: (pageSize, pageNumber) => dispatch(getArticles(pageSize, pageNumber)),
	getTags: () => dispatch(getTags()),
	getTag: (name) => dispatch(getTag(name)),
	setPageNumber: (pageNumber) => dispatch(setPageNumber(pageNumber)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BlogContainer);
