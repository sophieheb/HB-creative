import React, { useState, useEffect } from 'react';
import styles from '../styles/about.module.css';

import brushPic from '../assets/brush.png';

import inspirationPic from '../assets/works3.png';

import workingTogether from '../assets/works9.png';


function About() {
  return (
  <div>
  <div className={`container-fluid p-0 ${styles.topBanner}`} />

  <div className="container-fluid">
    <div className="row py-5 mt-5">
      <div className="col-6">
        <h1 className="text-right">ABOUT ME</h1>
        <hr className="my-5" />
        <p className="ml-5 pl-5 pr-4">Painting and drawing has always been a part of my life. I progressed with it through school, then later at Bournemouth Arts Uni but only found my true groove with it in the last few years; finding peace with it, like a form of therapy.</p>
      </div>
    </div>
    <div className="row justify-content-end">
    <div className="col-10 pr-0 pl-4 my-5">
        <img
          src={brushPic}
          className="img-fluid"
          alt="HB Creative logo"
        />
      </div>
      </div>
  </div>

  <div className="container-fluid">
    <div className="row py-5 my-5">
    <div className="col-6 pl-0 pr-4">
        <img
          src={inspirationPic}
          className="img-fluid"
          alt="HB Creative logo"
        />
      </div>
      <div className="col-6 pl-5 pr-0">
        <h1 >INSPIRATION</h1>
        <hr className="my-5" />
        <div className="pr-5">
        <p> Growing-up by the sea has definitely influenced my work - I've travelled around the world and I can hands-down say, the place that always calls me home is Mudeford Sanspit; a place I feel most inspirated and where I spent a lot of my childhood.</p>
        <p>I use this feeling to create 'calm' on canvas with an atmospheric aesthetic, taking on a contemporary abstract style.</p>
        <p>My medium of choice is acrylics and I stretch my own canvases so, I'm able to create bespoke size pieces to fit every unique space.</p>
        </div>
      </div>

    </div>

  </div>

  <div className={`container-fluid p-0 ${styles.bottomBanner}`} />
  
  <div className="container-fluid">
    <div className="row py-5 mt-5">
      <div className="col-6 pl-0 pr-5">
        <h1 className="text-right">WORKING TOGETHER</h1>
        <hr className="my-5" />
        <p className="ml-5 pl-5 pr-4">I love working with people to deliver their vision; it's always so special and humbling to hear people want my work hung in their house. It's a real honour for me. So I'd love to hear from you, just get in touch.</p>
        <div className="ml-5 pl-5">
          <button className="btn btn-primary" type="button">CONTACT</button>
        </div>
      </div>
      <div className="col-6 pr-0 pl-4">
        <img
          src={workingTogether}
          className="img-fluid bg-yellow "
          alt="HB Creative logo"
        />
      </div>
    </div>

  </div>
</div>
  )
}

export default About;
