import React from 'react'
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const HowToCrypto = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div className='howto'>
<Button variant="danger" size="sm" onClick={handleShow}>
        → How to ADD a Stock or Cryptocurrency ←
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span className='boldmodal'>Stocks <span className="changemodalfont">→</span> just type in the symbol.</span> 
            <br></br>
            <br></br>
            For Tesla: TSLA
            <br></br>
            For Apple: AAPL 
            <br></br>
            For SPDR SPY Etf: SPY
            <br></br>
            <br></br>
            <span className='boldmodal'>Cryptocurrencies <span className="changemodalfont">→</span> type in the symbol and add "-USD" at the end. </span>
            <br></br>
            <br></br>
            For Bitcoin: BTC-USD
            <br></br>
            For Ethereum: ETH-USD
            <br></br>
            For Solana: SOL-USD
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

export default HowToCrypto