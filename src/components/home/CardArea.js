import React from 'react';
import { Row, Col } from 'antd';
import Card from './Card';

const PATH_HAPPSNOW = './img/happsnow.png';
const PATH_GALLER = './img/galler.png';
// const PATH = './img/happsnow.png';

const CardArea = ({ cardList }) => (
	<div className="card-container bgcl-bright">
		{cardList.map((cardData)=>(
			<Card key={cardData.id}
				      cardData={cardData}/>
			)
		)}
	</div>
);

CardArea.defaultProps = {
	cardList: [
		{id:1, img:PATH_HAPPSNOW, href:"http://www.happsnow.com", title:"Happsnow", description:"Online Ticket Vending Webapp"},
		{id:2, img:PATH_GALLER, href:"https://galler.herokuapp.com", title:"Galler", description:"My Personal Photo Gallery"},
	]
};

export default CardArea;