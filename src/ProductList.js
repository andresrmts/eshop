import React from 'react';
import Product from './Product';

const ProductList = ({products}) => {
	return (
		<div className = "h-100">
			{
			products.map((product, i) => {
				return (
					<Product 
						key = {products[i].id}
						img = {products[i].image}
						name = {products[i].name}
						price = {products[i].price}
						currency = {products[i].currency}
						/>
					)
				})	
			}
		</div>

	)
}

export default ProductList;