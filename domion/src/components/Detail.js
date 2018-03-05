import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Detail extends Component {
	constructor(){
		super();
		this.state={
			detail:[]
		}
	}
	componentDidMount(){
		axios.get('http://localhost:3000/classicflavor')
	    .then((response) => {
	    	console.log(response);
	    	this.setState({
	    		details1:response.data
	    	})
	    })
	}
	render() {
		return (
			<div className="detail">
				{this.props.match.params.fid}
			</div>
		)
	}
}