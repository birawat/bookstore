import React from 'react'
import './Cartmodal.css';
import Stack from 'react-bootstrap/Stack';
import { Modal, Button, CloseButton, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Cartmodal({ setModal, modal, cartValue }) {

    console.log("carValue", cartValue);

    const initModal = () => {
        setModal(false)
    }
    return (
        <div >
            <Modal className="main-div" show={modal} size="lg" >
                <Modal.Header>
                    <Modal.Title>
                        <Stack gap={4}>
                            <div style={{ justifyContent: "space-between", display: "flex", width: "50vw", fontSize: "20px" }}>My Shopping Cart (1 items)
                            </div>
                            <div style={{ justifyContent: "space-between", display: "flex", width: "50vw", fontSize: "15px" }}>
                                <span>Sr.</span>
                                <span>Item Description</span>
                                <span>Quantity</span>
                                <span>Item Price</span>
                            </div>
                        </Stack>
                    </Modal.Title>
                    <CloseButton onClick={() => setModal(false)} />
                </Modal.Header>
                {cartValue?.map((post, index) => {
                    debugger
                    console.log(post)
                    return (
                        <Modal.Body>
                            <div className="col">
                                <div className="card h-25">
                                    <div className="card-body">
                                        <div className="row">

                                            <div className="d-flex justify-content-between">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                            className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                                                    </div>
                                                    <div>
                                                        <h5 style={{ marginLeft: "130px" }}>{post.post.description.length >= 20 ? post.post.description.substring(0, 20) + "..." : post.post.description}</h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: "200px" }}>
                                                        <h5 className="fw-normal mb-0">{post.post.category}</h5>
                                                    </div>
                                                    <div style={{ width: "130px" }}>
                                                        <h5 className="mb-0">$30</h5>
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