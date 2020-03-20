import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { robots } from './robots'; 
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

const state = {
	robots: robots,
	searchfield: '' 
} 

class App extends Component {
 	constructor() {
 		super();
 		this.state = { 
           robots: robots,
		   searchfield: '' 
		}
	} 
 // componentDidMount(){
 // 	fetch('https://jsonplaceholder.typicode.com/users')
 // 	.then(reponse=> reponse.json())
 // 	.then(users =>this.setState({robots:users}));
 // }

   onSearchChange=(event) =>{
   		this.setState({ searchfield: event.target.value})
   		console.log(this.state.searchfield)
 	}

	render() {
	const { robots, searchfield } = this.state;
	const filteredRobots = robots.filter(robot =>{
   		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
   		})
	
		return (
		 	   <div className='tc'> 
			 	    <h1 className= 'f1'>Robofriends</h1>
			 	    <SearchBox searchChange= {this.onSearchChange}/>
			 	    <Scroll>
			 	    <ErrorBoundary>
			 				<CardList robots ={filteredRobots}/>
			 			</ErrorBoundary>
			 		</Scroll>
		 	   </div>
 	);	
  }
}

export default App;   