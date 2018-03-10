import React from 'react';

const ShoppingCartButton = ({incart, onAdd}) => {
	if (incart === true) {
		return (
			<div onClick = {onAdd} className="f6 link br-pill ph3 pv2 mb2 dib white bg-dark-red">
				<p>Remove from cart!</p>
			</div>
		)	
	} else {
		return (
			<div onClick = {onAdd} className = "f6 link br-pill ph3 pv2 mb2 dib white bg-dark-green">
				<p>Add to cart!</p>
			</div>
		)
	}
	
}

export default ShoppingCartButton;