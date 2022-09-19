import React from 'react'
import './Cartmodal.css';
import Stack from 'react-bootstrap/Stack';
import { Modal, Button, Container, Dropdown } from 'react-bootstrap'
export default function Cartmodal({ setModal, modal }) {
    const initModal = () => {
        setModal();
    }
    return (
        <div >
            <Modal className="main-div" show={modal} size="lg" >
                <Modal.Header closeButton onClick={initModal} >
                    <Modal.Title>
                    <Stack gap={4}>
                        <div style={{ justifyContent: "space-between", display: "flex", width: "50vw", fontSize: "20px" }}>My Shopping Cart (1 items)
                           {/* {/* <span style={{ fontSize: "15px" }}>Currency
                           
                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="danger" id="dropdown-basic" >
                                        INR
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-3">INR</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">USD</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> 

                            </span> */}
                            
                            </div>
                           
                            <div style={{ justifyContent: "space-between", display: "flex", width: "50vw", fontSize: "15px" }}>
                            <span>Sr.</span>
                            <span>Item Description</span>
                            <span>Quantity</span>
                            <span>Item Price</span>
                            <span>Total Price</span>
                        </div>
                        </Stack>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
               
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
               
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={initModal}>
                        Place Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}