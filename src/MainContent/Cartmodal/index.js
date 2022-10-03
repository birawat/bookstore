import React from 'react'
import './Cartmodal.css';
import Stack from 'react-bootstrap/Stack';
import { Modal, Button, CloseButton } from 'react-bootstrap'
export default function Cartmodal({ setModal, modal }) {
   
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
                    <CloseButton onClick={() =>setModal(false)}/>
                </Modal.Header>
                <Modal.Body>
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
               
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
                    Your Shopping Cart is currently empty. To add Books in your Shopping Cart, start by searching or browsing through our book store. When a book interests you, click on Add to Cart button. Books in Shopping Cart always reflect the most recent price, displayed on their product pages.
               
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setModal(false)}>
                        Place Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}