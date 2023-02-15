import React, { Component } from 'react'

class Gif extends Component {
	handleClick = (event) => {
		this.props.selectGif(event.target)
	}

	render() {
		const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
		return (
			<img className="gif" src={src} alt="" onClick={this.handleClick} />
		);
	}
}

export default Gif;