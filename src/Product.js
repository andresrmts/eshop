import React, { Component } from 'react';

export default class Product extends Component {
	constructor() {
		super();
		this.state = {
			details: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
	this.setState(prevState => ({
		details: !prevState.details
	}));
	}
	render() {
		const { details } = this.state;
		const { img, name, price, currency, description, department} = this.props;
		if (details === false) {
			return (
			<div onClick = {this.handleClick} className = "tc bg-lightest-blue dib br4 pa3 ma2 bw2 shadow-5 w5">
				<img src={img} alt="productphoto" />
				<h3>{name}</h3>
				<p className = "tc bg-green bw1 br-pill fl w-third shadow-3">{price} {currency}</p>
			</div>
			)
		} else {
			return (
			<div onClick = {this.handleClick} className = "tc bg-lightest-blue dib br4 pa3 ma2 bw2 shadow-5 w5">
				<img src={img} alt="productphoto" />
				<h3>{name}</h3>
				<p>Description: {description}</p>
				<p>Department: {department}</p>
				<p className = "tc bg-green bw1 br-pill fl w-third shadow-3">{price} {currency}</p>
			</div>
			)
		}
	}
}

