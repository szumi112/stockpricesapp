import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const HowTo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div className='specChars'>

<Button variant="outline-light" size="sm" onClick={handleShow}>
        → Futures and Commodities ←
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span className='boldmodal'>Stock and Commodities Futures <span className="changemodalfont">→</span> type in the symbol and add "=F" at the end.</span> 
            <br></br>
            <br></br>
            For S&P Futures: ES=F
            <br></br>
            For Nasdaq Futures: NQ=F 
            <br></br>
            For Gold Futures: GC=F
            <br></br>
            For Crude Oil Futures: CL=F
            <br></br>
            <br></br>
            <span className="commentmodal">Please allow a few seconds for the data to update after searching
            and <span className="boldmodal">refresh the website</span>.
            If it doesn't appear, then please re-enter the correct symbol.
            <br></br>
            <br></br>
            Prices update once a minute or so.
            </span>

            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default HowTo