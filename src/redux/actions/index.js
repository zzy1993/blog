import { REQUEST_ISSUES } from '../actionTypes'
import axios from 'axios';

export function requestIssues(payload) {
	
	
	return {
		type: REQUEST_ISSUES,
		payload:{
			
		}
	};
}