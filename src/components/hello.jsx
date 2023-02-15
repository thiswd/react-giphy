import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		clicked: true,
  		counter: 0
  	};
  }

  handleClick = () => {
		// when you want to use 'this' inside the function, you need to use this notation
  	this.setState({
  		clicked: !this.state.clicked,
  		counter: this.state.counter + 1
  	})
  }

  render() {
  	return (
  		<div className={ this.state.clicked ? 'clicked' : null } onClick={this.handleClick} >
  			Hello, {this.props.name} {this.state.counter}
  		</div>
  		// when you are using class notation for building component, you need to use 'this'
  	)
  }
}

export default Hello;