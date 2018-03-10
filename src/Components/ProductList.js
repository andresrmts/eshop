import React from 'react';
import Product from '../Containers/Product';

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
						description = {products[i].description}
						department = {products[i].department}
						/>
					)
				})
			}
		</div>

	)
}

export default ProductList;