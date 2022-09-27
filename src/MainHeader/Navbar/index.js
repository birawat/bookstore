import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="main_nav" style={{backgroundColor:"darkblue"}}>
			<div className="container">
				<div className="row">
					<div className="col">
                        <div className="main_nav_content d-flex flex-row">
                            <div className="main_nav_menu">
								
								<ul className="standard_dropdown main_nav_dropdown" >
								
									<li><Link href="#" id="books" className='text-white' to="/">Books<i className="fas fa-chevron-down"></i></Link></li>
									
									<li className="hassubs">
										<a href="#" id="newArrivals" className='text-white'>New Arrivals<i className="fas fa-chevron-down"></i></a>
										<ul>
										
											
											
										</ul>
									</li>
									<li className="hassubs">
										<a href="#" className='text-white'>Box Sets<i className="fas fa-chevron-down"></i></a>
										
									</li>
									<li className="hassubs">
										<a href="#" className='text-white'>Best sellers<i className="fas fa-chevron-down"></i></a>
										
									</li>
									<li><a href="blog.html" className='text-white'>Fiction Books<i className="fas fa-chevron-down"></i></a></li>
									
                                    <li><a href="contact.html" className='text-white'>Award Winners<i className="fas fa-chevron-down"></i></a></li>
                                    <li><Link href="contact.html" className='text-white' to="/Author">Featured Authors<i className="fas fa-chevron-down"></i></Link></li>

                                    <li><Link href="contact.html" className='text-white' to="/requestbook">Request a Book<i className="fas fa-chevron-down"></i></Link></li>

                                </ul>
							</div>
                            <div className="menu_trigger_container ml-auto">
								<div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
									<div className="menu_burger">
										<div className="menu_trigger_text">menu</div>
										<div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
									</div>
								</div>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</nav>
        <div className="page_menu">
			<div className="container">
				<div className="row">
					<div className="col">
						
						<div className="page_menu_content">
							
							<div className="page_menu_search">
								<form action="#">
									<input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..."/>
								</form>
							</div>
							<ul className="page_menu_nav">
								<li className="page_menu_item has-children">
									<a href="#">Language<i className="fa fa-angle-down"></i></a>
									<ul className="page_menu_selection">
										<li><a href="#">English<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Italian<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Spanish<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Japanese<i className="fa fa-angle-down"></i></a></li>
									</ul>
								</li>
								<li className="page_menu_item has-children">
									<a href="#">Currency<i className="fa fa-angle-down"></i></a>
									<ul className="page_menu_selection">
										<li><a href="#">US Dollar<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">EUR Euro<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">GBP British Pound<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">JPY Japanese Yen<i className="fa fa-angle-down"></i></a></li>
									</ul>
								</li>
								<li className="page_menu_item">
									<a href="#">Home<i className="fa fa-angle-down"></i></a>
								</li>
								<li className="page_menu_item has-children">
									<a href="#">Super Deals<i className="fa fa-angle-down"></i></a>
									<ul className="page_menu_selection">
										<li><a href="#">Super Deals<i className="fa fa-angle-down"></i></a></li>
										<li className="page_menu_item has-children">
											<a href="#">Menu Item<i className="fa fa-angle-down"></i></a>
											<ul className="page_menu_selection">
												<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
												<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
												<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
												<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
											</ul>
										</li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
									</ul>
								</li>
								<li className="page_menu_item has-children">
									<a href="#">Featured Brands<i className="fa fa-angle-down"></i></a>
									<ul className="page_menu_selection">
										<li><a href="#">Featured Brands<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
									</ul>
								</li>
								<li className="page_menu_item has-children">
									<a href="#">Trending Styles<i className="fa fa-angle-down"></i></a>
									<ul className="page_menu_selection">
										<li><a href="#">Trending Styles<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
										<li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
									</ul>
								</li>
								<li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down"></i></a></li>
								<li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down"></i></a></li>
							</ul>
							
							<div className="menu_contact">
								<div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt=""/></div>+38 068 005 3570</div>
								<div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt=""/></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
