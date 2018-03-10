import React from 'react';

const StoreFilter = ({storeChange}) => {
	return (
		<div className = "pa2">
			<select
				className = "pa3 ba b--green bg-lightest-blue" 
				id="stores"
				onChange={storeChange}>
				<option value=""></option>
				<option value="Finland">Finland</option>
				<option value="Estonia">Estonia</option>
			</select>
		</div>
	)
}

export default StoreFilter;