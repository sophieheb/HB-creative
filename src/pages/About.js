import React from 'react';
import styles from '../styles/about.module.css';

import holly from '../assets/about-holly.png';

import brush from '../assets/brush.jpg';

import workingTogether from '../assets/works-7.png';

function About() {
  return (
    <div>
      <div className={`container-fluid p-0 ${styles.topBanner}`} />

      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-11 col-md-6 pl-0">
            <h1 className="text-right pl-4">ABOUT ME</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-md-5 pl-0 pr-4">
              Painting and drawing has always been a part of my life.
              I progressed with it through school, then later at Bournemouth Arts Uni but only
              found my true groove with it in the last few years;
              finding peace with it, like a form of therapy.
            </p>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-12 col-md-10 pr-0 pl-4 my-5">
            <img
              src={holly}
              className="img-fluid"
              alt="Holly infront of her work."
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row py-5 my-5 mt-5">
          <div className="col-12 col-md-6 pl-0 pr-4">
            <img
              src={brush}
              className="img-fluid"
              alt="Holly's brushes"
            />
          </div>
          <div className="col-12 col-md-6  pt-5 pt-md-0 pl-5 pr-0">
            <h1>INSPIRATION</h1>
            <hr className="my-5" />
            <div className="pr-5">
              <p>
                {' '}
                Growing-up by the sea has definitely influenced my work
                - I&apos;ve travelled around the world and I can hands-down say,
                the place that always calls me home is Mudeford Sanspit;
                a place I feel most inspirated
                and where I spent a lot of my childhood.
              </p>
              <p>
                I use this feeling to create &apos;calm&apos; on canvas
                with an atmospheric aesthetic, taking on a contemporary abstract style.
              </p>
              <p>
                My medium of choice is acrylics and I stretch my own canvases so,
                I&apos;m able to create bespoke size pieces to fit every unique space.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className={`container-fluid p-0 ${styles.bottomBanner}`} />

      <div className="container-fluid">
        <div className="row py-5 mt-5">
          <div className="col-11 col-md-6 pl-0 pr-md-4 pr-0">
            <h1 className="text-right pl-4">WORKING TOGETHER</h1>
            <hr className="my-5" />
            <p className="ml-5 pl-md-5 pl-0 pr-4">
              I love working with people to deliver their vision;
              it&apos;s always so special and humbling to hear
              people want my work hung in their house.
              It&apos;s a real honour for me. So I&apos;d love to hear from you, just get in touch.
            </p>
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

export default About;
