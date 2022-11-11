import React from 'react'
import './Wishlist.css';

export default function Wishlist({ cartValue,setWishlistValue, wishlistValue,setCartValue,buttontext,setButtontext,wishlistModal,setWishlistModal}) {

	const removeItem = (event) =>{
		
		//console.log(wishlistValue)
		
		const deleteItem = wishlistValue.filter((val,index)=>{
		//	wishlistValue.push(index)
			//console.log("12",wishlistValue)
			console.log("14",val.post.name)
		//	console.log("15",index)
			return  val.post.name !== event.target.name
		})
		setWishlistValue(deleteItem)
	}
	return (
		<div className="cart-wrap container row p-5">
			<div className="col-md-12">
				<div className="main-heading mb-10 table-wishlist">My wishlist</div>
				<table cellpadding="0" cellspacing="0" border="0" width="100%">
					<thead>
						<tr>
							<th width="10%"> Image</th>
							<th width="20%" >Description</th>
							<th width="20%" >Category</th>
							<th width="15%">Price</th>
						</tr>
					</thead>
					<tbody>
						{
							wishlistValue?.map((post, index) => {
								//console.log(post)
								//console.log("23",index)
								return (
									<tr>
										<td>
											<div className="display-flex align-center">
												<div className="img-product">
													<img src={post.post.imageLinks ? post.post.imageLinks : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.pn"}
													 alt="" className="mCS_img_loaded mt-5" style={{ height: "100px" }} />
												</div>
											</div>
										</td>
										<td>
											<div className="name-product">
											{post.post.description.length >= 20 ? post.post.description.substring(0, 20) + "..." : post.post.description}
											</div>
										</td>
										<td className="price">{post.post.category}</td>
										<td className="price">{post.post.price}</td>
									<td width="15%"><button className="round-black-btn small-btn text-size-sm" id={index} onClick={(e) => {
                        
											
											setCartValue([...cartValue,{post}])                    
											
											index===e.target.id ?setButtontext("Added to cart")
											 : setButtontext("Add cart")                
										  }}>{buttontext}</button></td>
										<td width="15%"><button className="round-red-btn small-btn" id={index} name={post.post.name} onClick={removeItem}>Remove</button></td>
									</tr>
								)
							})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
