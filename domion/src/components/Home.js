import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import logo from '../image/pic_logo.png';
import '../style/Home.css';

class Home extends Component{
	constructor(){
		super();
		this.state={
			lunbo:[]
		}
	}
	componentDidMount(){
		axios.get('http://localhost:3000/imgs')
  		.then((response)=>{
    		console.log(response);
    		this.setState({
    			lunbo:response.data
    		})
  		})
	}
	render(){
		return(
			<div className="home">
				<header>
		       	<span>上海市</span>
		       	<img src={logo} className="App-logo" alt="logo"/>
		       </header>
		       <div>		
		    				{
		    						this.state.lunbo.map(function(item,index){
		    							console.log(item);
		    							console.log(item.imgUrl);
		    							return(
		    								<div key={item.id}>
		    									<Link to="/list">
		    									<img src={item.imgUrl} alt={item.alt} className="carousel"/>
		    									</Link>
		    								</div>
		    							)
		    						})
		    				}
		       </div>
		       <section>
		       	<div>
		       		<img src={require('../image/home-mdcx.png')} alt=""/>
		       		<img src={require('../image/home-dzdhq.png')} alt=""/>      		
		       		<img src={require('../image/home-ppgs.png')} alt=""/>
		       		<img src={require('../image/home-ddzz.png')} alt=""/>
		       	</div>
		       	<div>
		       		<img src={require('../image/home-ksdc.png')} alt=""/>
		       	</div>
		       </section>
		       <footer>
		       	<div>
		       		<img src={require('../image/tab_homepage_blue.png')} alt=""/>
		       		<img src={require('../image/tab_menu_grey.png')} alt=""/>
		       		<img src={require('../image/tab_ticket_grey.png')} alt=""/>
		       		<img src={require('../image/tab_shoppingcart_grey.png')} alt=""/>
		       		<img src={require('../image/tab_me_grey.png')} alt=""/>
		       	</div>
		       </footer>
		    </div>
		)
	}
}

export default Home;