import React from 'react';

const Product = ({img, name, price, currency}) => {
	return (
		<div className = "tc bg-lightest-blue dib br4 pa3 ma2 bw2 shadow-5 w5">
			<img src={img} alt="productphoto" />
			<h1>{name}</h1>
			<p className = "tc bg-green bw1 br-pill fl w-third shadow-3">{price} {currency}</p>
		</div>
	)
}

export default Product;