import React from 'react';

import image from '../assets/works-7.png';

function NotFound() {
  return (

    <div className="container-fluid mt-5">
      <div className="row py-5 mt-5">
        <div className="col-12 col-md-6 pl-0">
          <h1 className="text-md-right text-center mb-0">404</h1>
          <p className="ml-5 pl-md-5 pl-0  pr-4 mb-0">
            This page doesn&apos;t exist. You&apos;ll probably want to head back to the homepage.
          </p>
          <div className="ml-5 pl-md-5 pl-0 my-5">
            <a className="btn btn-primary" type="button" href="/home">GO HOME</a>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-12 col-md-10 pr-0 pl-4 my-5">
          <img
            src={image}
            className="img-fluid"
            alt="HB Creative logo"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
