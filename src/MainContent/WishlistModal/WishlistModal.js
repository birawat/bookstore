import React from 'react'
import './WishlistModal.css';
import Stack from 'react-bootstrap/Stack';
import { Modal, Button, CloseButton, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function WishlistModal({  wishlistValue,wishlistModal,setWishlistModal }) {

   

    const initModal = () => {
        setWishlistModal(false)
    }
    return (
        <div >
            <Modal className="main-div" show={wishlistModal} size="lg" >
                <Modal.Header>
                    <Modal.Title>
                        <Stack gap={4}>
                            <div style={{ justifyContent: "space-between", display: "flex", width: "50vw", fontSize: "20px" }}>My Shopping Cart (1 items)
                            </div>
                            <div style={{ justifyContent: "space-between", display: "flex", width: "50vw", fontSize: "15px" }}>
                                <span className="imageSpan">Image</span>
                                <span className="descSpan">Description</span>
                                <span className="categorySpan">Category</span>
                                <span className="priceSpan">Item Price</span>
                            </div>
                        </Stack>
                    </Modal.Title>
                    <CloseButton onClick={() => setWishlistModal(false)} />
                </Modal.Header>
                {wishlistValue?.map((post, index) => {       
                  
                    return (
                        <Modal.Body>
                            <div className="col">
                                <div className="card h-25">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="d-flex justify-content-between">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <img src={post.post.imageLinks ? post.post.imageLinks : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.pn"} 
                                                            className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ marginLeft: "65px" }}>{post.post.description.length >= 20 ? post.post.description.substring(0, 20) + "..." : post.post.description}</h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: "200px" }}>
                                                        <h5 className="fw-normal mb-0">{post.post.category}</h5>
                                                    </div>
                                                    <div style={{ width: "130px" }}>
                                                        <h5 className="mb-0">{post.post.price}</h5>
                                                    </div>
                                                    
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Modal.Body>
                    )
                })
                }
                <Modal.Footer>
                    <Button variant="danger" onClick={initModal}><Link to="/paymentDetail" className='text-light'>Place Order</Link></Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}