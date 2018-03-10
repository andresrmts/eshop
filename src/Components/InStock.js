import React from 'react';

const InStock = ({stock}) => {
	return (
		<div>
			<p>Show in stock?  
			<input
				name = "stockyesno"
				type="checkbox" 
				value="true"
				onChange = { stock } />
			</p>
		</div>
	)
}

export default InStock;