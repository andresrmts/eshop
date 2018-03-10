import React from 'react';

const InStock = ({stock}) => {
	return (
		<div>
			<p>Show in stock?</p>
			<input
				name = "stockyesno"
				type="checkbox" 
				value="true"
				onChange = { stock } />
		</div>
	)
}

export default InStock;