import React, { useState, useEffect } from 'react';

import image from '../assets/works7.png';
function NotFound() {
  return (    <div className="container-fluid mt-5">
  <div className="row py-5 mt-5">
    <div className="col-6 pl-0 pr-5">
      <h1 className="ml-5 mb-5 pl-5 pr-4">404</h1>
      <p className="ml-5 pl-5 pr-4">This page doesn't exist. You'll probably want to head back to the homepage.</p>
      <div className="ml-5 pl-5">
        <button className="btn btn-primary" type="button">GO HOME</button>
      </div>
    </div>
    <div className="col-6 pr-0 pl-4">
      <img
        src={image}
        className="img-fluid bg-yellow "
        alt="HB Creative logo"
      />
    </div>
  </div>
</div>)
}

export default NotFound;
