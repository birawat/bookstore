import React from 'react'
import CartIcon from './CartIcon';
import Favorite from './Favorite';
import Icon from './Icon';
import Search from './Search';
export default function Header({ setModal}) {
	return (
		<div>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
			<div className="super_container">
				<header className="header" style={{ height: "auto" }}>
				<div className="header_main" >
					<div className="container">
						<div className="row">
							<div className="col-lg-2 col-sm-3 col-3 order-1">
								<Icon/>
							</div>
							<div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
								<Search />
							</div>
							<div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
								<div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
									<Favorite />
									<CartIcon setModal={setModal} />
								</div>
							</div>
						</div>
					</div>
				</div>
			
				</header>
			</div>
		</div>
	)
}