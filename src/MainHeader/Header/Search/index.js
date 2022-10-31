import React from 'react'
import { useState } from 'react';

export default function Search() {
	const [img, setImg] = useState('');
	const inputEvent = (event) => {
		const data = event.target.value;
		
	}
	return (
		<div className="header_search">
			<div className="header_search_content">
				<div className="header_search_form_container " style={{ width: "65%", position: "relative" }}>
					<form action="#" className="header_search_form clearfix" >
						<input type="search" 
						value={img}
						required="required" 
						onChange={inputEvent} 
						className="header_search_input" 
						placeholder="Search for products..." 
						style={{ width: "80%" }}/>

						<button type="submit" className="header_search_button trans_300" value="Submit">
							<img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt="" />
						</button>
					</form>
				</div>
			</div>
		</div>

	)
}
