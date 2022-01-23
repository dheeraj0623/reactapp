import React from 'react'; 

class Testing extends React.Component { 
	constructor(props) 
	{ 
		super(props); 
		this.state = { hello : "World!" }; 
        console.log("Constructor Called...")
	} 

	componentWillMount() 
	{ 
		console.log("componentWillMount()"); 
	} 

	componentDidMount() 
	{ 
		console.log("componentDidMount()"); 
	} 

	changeState() 
	{ 
		this.setState({ hello : "Gwalior" }); 
	} 

	render() 
	{
		console.log("render called");
		return ( 
			<div> 
			<h1>Hello{ this.state.hello }</h1> 
			<h2> 
			<a onClick={this.changeState.bind(this)}>Press Here!</a> 
			</h2> 
			</div>); 
	} 

	shouldComponentUpdate(nextProps, nextState) 
	{ 
		console.log("shouldComponentUpdate()"); 
		return true; 
	} 

	componentWillUpdate() 
	{ 
		console.log("componentWillUpdate()"); 
	} 

	componentDidUpdate() 
	{ 
		console.log("componentDidUpdate()"); 
	} 
} 

export default Testing;
