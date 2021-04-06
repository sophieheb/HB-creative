import React from 'react';
import styles from '../styles/home.module.css';

import video from '../assets/works5.png';
import hollyPic from '../assets/holly.png';
import workingTogether from '../assets/working-together-home.png';

function Home() {
  return (
    <div>
    <div className={`container-fluid p-0 ${styles.topBanner}`} />
  
    <div className="container-fluid">
      <div className="row py-5 mt-5">
        <div className="col-6">
          <h1 className="text-right">ORIGINAL ARTWORK</h1>
          <hr className="my-5" />
          <p className="ml-5 pl-5 pr-4">Every painting has a story, each, a one-of-a-kind, envoking a sense of that soul-renewing stillness; that deep breath you take when you reach the seashore.</p>
        </div>
      </div>
      <div className="row justify-content-end">
      <div className="col-10 pr-0 pl-4 my-5">
          <img
            src={video}
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
            src={hollyPic}
            className="img-fluid"
            alt="HB Creative logo"
          />
        </div>
        <div className="col-6 pl-5 pr-0">
          <h1 >HEY, I'M HOLLY</h1>
          <hr className="my-5" />
          <div className="pr-5">
            <div className="pb-3">
            <p>INSPIRATION</p>
            <p>My seaside home on the Dorset coast.</p>
            </div>
            <div className="pb-3">
            <p>MY STYLE</p>
            <p>Contemporary abstract seascapes with a bohemian/scandi vibe.</p>
            </div>
            <div className="pb-3">
            <p>WHAT I USE</p>
            <p>My medium of choice is acrylics and I stretch my own canvases so, I'm able to create bespoke size pieces to fit every unique space.</p>

            </div>
            <p>Check out my full bio for more.</p>
            <div>
            <button className="btn btn-primary" type="button">ABOUT</button>
          </div>
 </div>
        </div>
  
      </div>
  
    </div>
  
    <div className="row position-relative vh-50 mb-5 overflow-hidden">
      <p className={`${styles.quote} w-75 pl-5`}>"... the sound of waves peacefully crushing on the sand, the smell of salty air."</p>
      <div className={`container-fluid p-0 pt-3 position-absolute  ${styles.bottomBanner}`}>
      </div>
      </div>
    
    <div className="container-fluid mt-5">
      <div className="row py-5 mt-5">
        <div className="col-6 pl-0 pr-5">
          <h1 className="text-right">WORKING TOGETHER</h1>
          <hr className="my-5" />
          <p className="ml-5 pl-5 pr-4">If you're an interior designer, stylist or someone looking for that special something for your space, please get in touch to chat about finding/creating unique pieces for clients or bespoke commissions.</p>
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
  );
}

export default Home;
