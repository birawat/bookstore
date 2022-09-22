import React from 'react'

export default function Search() {
  return (
    <div>
     
						<div className="header_search">
							<div className="header_search_content">
								<div className="header_search_form_container " style={{width:"65%" , position:"relative"}}>
									<form action="#" className="header_search_form clearfix" >
										<input type="search" required="required" className="header_search_input" placeholder="Search for products..."/>

										<button type="submit" className="header_search_button trans_300" value="Submit"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt=""/></button>
									</form>
								</div>
							</div>
						</div>  
					</div>
    
  )
}
