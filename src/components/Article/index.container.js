import React from 'react';
import {connect} from 'react-redux';
import Article from './index';

import { getArticle } from '../../redux/actions';

class ArticleContainer extends React.Component {
	
	componentDidMount() {
		const { articleId } = this.props.match.params;
		this.props.getArticle(articleId);
	}

	render() {
		return (
			<Article {...this.props} />
		);
	}
}

const mapStateToProps = (state) => {
	const { blog } = state;
	return {
		...blog,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getArticle: (id) => dispatch(getArticle(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleContainer);
