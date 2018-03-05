import React, {Component} from 'react';
//import { Tabs, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../style/List.css';

class List extends Component{
	constructor(){
		super();
		this.state={
			list:[]
		} 
	}
	componentDidMount(){
		axios.get('http://localhost:3000/classicflavor')
	    .then((response) => {
	    	console.log(response);
	    	this.setState({
	    		list:response.data
	    	})
	    })
	}
	render(){
		return(
			<div className="list">
				<header>
					<span className="span1">全球人气</span>
					<span className="span2">外送30分钟必达</span>
				</header>
				<section>
					{
						this.state.list.map(function(item,index){
							return(
								<div key={item.id}>
									<Link to={"/detail/"+item.id}>
									<div>
										<img src={item.imgUrl} alt=""/>
									</div>
									<div>
										<span>{item.name}</span>
									</div>
									</Link>
								</div>
							)
						})
					}
				</section>
			</div>
		);
	}
}

export default List;