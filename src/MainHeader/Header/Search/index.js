import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Search({ text, setText }) {
	//const [text,setText ] = useState('');

	const [data, setData] = useState()

	const inputText = (event) => {
		const data = event.target.value;
		
		setText(data)
	}
	const inputEvent = (event) => {
		
		// const data = event.target.value;
		
		// setText(data)
		console.log(data)
	}

	return (
		<div className="header_search">
			<div className="header_search_content">
				<div className="header_search_form_container " style={{ width: "65%", position: "relative" }}>
					<form action="#" className="header_search_form clearfix" >

						<input type="text"
							value={text}
							onChange={inputText}
							className="header_search_input"
							placeholder="Search for books..."
							style={{ width: "80%" }} />

						<Link to="/categoires">
							<button type="text" className="header_search_button trans_300" onClick={inputEvent} value={text}>
								<img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt="" />
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>

	)
}
