import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

const ArticlePaging = ({ switchPage, pageSize, total }) => {
	return (
		<div className="article-paging">
			<Pagination onChange={switchPage}
			            defaultPageSize={pageSize}
			            total={total} />
		</div>
	);
};

ArticlePaging.propTypes = {
	switchPage: PropTypes.func,
	pageSize: PropTypes.number,
	total: PropTypes.number,
};

export default ArticlePaging;