import React, { Component } from 'react';
import ShoppingCartButton from '../Components/ShoppingCartButton';
import './Product.css';

export default class Product extends Component {
	constructor() {
		super();
		this.state = {
			details: false,
			inshoppingcart: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleShoppingCartButtonClick = this.handleShoppingCartButtonClick.bind(this);
		this.handleShoppingCartChange = this.handleShoppingCartChange.bind(this);
	}
	handleClick = () => {
	this.setState(prevState => ({
		details: !prevState.details
	}));
	};

	handleShoppingCartChange = () => {
		this.setState(prevState => ({
		inshoppingcart: !prevState.inshoppingcart
	}));
	}

	handleShoppingCartButtonClick = () => {
		this.handleShoppingCartChange();
	}

	render() {
		const { details, inshoppingcart } = this.state;
		const { img, name, price, currency, description, department } = this.props;
		if (details === false) {
			return (
			<div className = "tc bg-lightest-blue dib br4 pa3 ma2 bw2 shadow-5 w5">
				<img src={img} alt="productphoto" />
				<h4 onClick = {this.handleClick}>{name}</h4>
				{inshoppingcart === false &&
					<p className = "tc bg-green bw1 br-pill fl w-third shadow-3">
						{price} {currency}
					</p>
				}
				{inshoppingcart === true &&
					<p className = "tc bg-dark-green br-pill fl w-75 shadow-3">
						You already have it!
					</p>
				}
			</div>
			)
		} else {
			return (
			<div className = "tc bg-lightest-blue dib br4 pa3 ma2 bw2 shadow-5 w5">
				<h3 onClick = {this.handleClick} >{name}</h3>
				<p>Description: {description}</p>
				<p>Department: {department}</p>
				<p className = "tc bg-green bw1 br-pill fl w-third shadow-3">{price} {currency}</p>
				<div className = "tr">
					<ShoppingCartButton incart = {this.state.inshoppingcart} onAdd = {this.handleShoppingCartButtonClick}/>
				</div>
			</div>
			)
		}
	}
}

