import React from 'react'
import {Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function RefreshPage() {
    const RefreshPage = (e) => {
        e.preventDefault();
        window.location.reload();

    }
  return (
    <Button variant='outline-secondary' size="sm" onClick={RefreshPage}>Update Prices</Button>
  )
}

export default RefreshPage