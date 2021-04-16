import React from 'react';
import styles from '../styles/home.module.css';

import brushes from '../assets/brushes.png';
import hollyPic from '../assets/holly.png';
import workingTogether from '../assets/works-1.png';

function Home() {
  return (
    <div>
      <div className={`container-fluid p-0 ${styles.topBanner}`} />

      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-11 col-md-6 pl-0">
            <h1 className="text-right">ORIGINAL ARTWORK</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-md-5 pl-0  pr-4">
              Every painting has a story, each, a one-of-a-kind,
              envoking a sense of that soul-renewing stillness;
              that deep breath you take when you reach the seashore.
            </p>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-12 col-md-10 pr-0 pl-4 my-5">
            <img
              src={brushes}
              className="img-fluid"
              alt="Holly's brushes."
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row py-5 my-5">
          <div className="col-12 col-md-6 pl-0 pr-md-4 pr-0">
            <img
              src={hollyPic}
              className="img-fluid"
              alt="Holly infront of her work"
            />
          </div>
          <div className="col-12 col-md-6  pt-5 pt-md-0 pl-5 pr-0">
            <h1 className="mb-0">HEY, I&apos;M HOLLY</h1>
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
                <p>
                  My medium of choice is acrylics and I stretch my own canvases so,
                  I&apos;m able to create bespoke size pieces to fit every unique space.
                </p>

              </div>
              <p>Check out my full bio for more.</p>
            </div>
            <a className="btn btn-primary my-5" href="/about">ABOUT</a>
          </div>

        </div>

      </div>
      <div className={`container-fluid p-0 ${styles.bottomBanner}`} />

      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-11 col-md-6 pl-0 pr-md-4 pr-0">
            <h1 className="text-right pl-4 mb-0">WORKING TOGETHER</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-md-5 pl-0 pr-4 mb-0">
              If you&apos;re an interior designer, stylist or someone
              looking for that special something for your space,
              please get in touch to chat about finding/creating
              unique pieces for clients or bespoke commissions.
            </p>
            <div className="m-5  pl-md-5 pl-0 ">
              <a className="btn btn-primary" href="/contact">CONTACT</a>
            </div>
          </div>
          <div className="col-12 col-md-6 pr-0 pl-4 my-5 my-md-0 mb-md-0">
            <img
              src={workingTogether}
              className="img-fluid"
              alt="Holly's work in a home setting"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
