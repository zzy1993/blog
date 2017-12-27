import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

export default class ArticlePaging extends React.Component {

	render() {
		const { switchPage, pageSize, total } = this.props;
		return (
			<div className="blog-article-paging">
				<Pagination onChange={switchPage}
				            defaultPageSize={pageSize}
				            total={total} />
			</div>
		);
	}
}

// ArticlePaging.defaultProps = {
// 	handlePageChange: null,
// 	defaultPageSize: 5,
// 	total: 10,
// };
//
// ArticlePaging.propTypes = {
// 	handlePageChange: PropTypes.func,
// 	defaultPageSize: PropTypes.number,
// 	total: PropTypes.number,
// };
