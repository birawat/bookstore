import React from 'react'
import './Wishlist.css';
import WishlistData from './WishlistData';

export default function Wishlist() {
	return (
		<div className="cart-wrap container row p-5">
			<div className="col-md-12">
				<div className="main-heading mb-10 table-wishlist">My wishlist</div>
				<table cellpadding="0" cellspacing="0" border="0" width="100%">
					<thead>
						<tr>
							<th width="10%"> Product</th>
							<th width="20%" >Product Name</th>
							<th width="15%">Unit Price</th>
						</tr>
					</thead>
					<tbody>
						{
							WishlistData.map((data) => {
								return (
									<tr>
										<td>
											<div className="display-flex align-center">
												<div className="img-product">
													<img src={data.img} alt="" className="mCS_img_loaded mt-5" style={{ height: "100px" }} />
												</div>
											</div>
										</td>
										<td>
											<div className="name-product">
												{data.productName}
											</div>
										</td>
										<td className="price">{data.price}</td>
										<td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
										<td width="15%"><button className="round-red-btn small-btn">Remove</button></td>
									</tr>
								)
							})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
