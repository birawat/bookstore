import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { AllApi } from '../../AllApi';
export default function Navbar({name,setName,cartValue,setCartValue}) {
	
	//const apiData = AllApi();
 const categoryName = (event)=>{
	setName(event.target.name)
 }
	
	return (
		<div>
			<nav className="main_nav" style={{ backgroundColor: "darkblue" }}>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="main_nav_content d-flex flex-row">
								<div className="main_nav_menu" >
									<ul className="standard_dropdown main_nav_dropdown" >
										<li >
											<Link href="#" id="books" className='text-white'  to="/">Books</Link>
										</li>
										<li className="hassubs">
											<Link href="#" id="newArrivals" name="New Arrivals" onClick={categoryName} className='text-white' to="/categoires">New Arrivals</Link>
										</li>
										<li className="hassubs">
										<Link href="#" id="newArrivals" name="Box Sets" onClick={categoryName} className='text-white' to="/categoires">Box Sets</Link>
										</li>
										<li className="hassubs">
											<Link href="#" id="newArrivals" name="Best Sellers" onClick={categoryName} className='text-white' to="/categoires">Best Sellers</Link>
										</li>
										<li>
										<Link href="#" id="newArrivals" name="Fiction Books" onClick={categoryName} className='text-white' to="/categoires">Fiction Books</Link>
										</li>
										<li>
										<Link href="#" id="newArrivals" name="Award Winners" onClick={categoryName} className='text-white' to="/categoires">Award Winners</Link>
										</li>
										<li><Link href="contact.html" className='text-white' to="/author">Featured Authors</Link></li>
										<li>
											<Link href="contact.html" className='text-white' to="/requestbook">Request a Book</Link>
										</li>
										<li><Link href="contact.html" className='text-white'to="/seller">Seller</Link></li>
									</ul>
								</div>
								<div style={{ marginLeft: "auto", fontSize: "40px" }}>
									<Link href="contact.html" className='fa fa-user-circle-o text-light' to="/login"></Link>									
								</div>
								<div className="menu_trigger_container ml-auto">
									<div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
										<div className="menu_burger">
											<div className="menu_trigger_text">menu</div>
											<div className="cat_burger menu_burger_inner">
												<span></span>
												<span></span>
												<span></span>
											</div>
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
										<input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..." />
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
									<div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div>+38 068 005 3570</div>
									<div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
