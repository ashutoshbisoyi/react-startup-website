import React from 'react';
import { NavLink } from 'react-router-dom';
import clientimg from '../images/clientimg.webp';
import GetAppIcon from '@material-ui/icons/GetApp';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const Intro = () => {
  return (
    <>
      <section className='container row mx-auto intro'>
        <div className='col-lg-6 col-md-12'>
          <h3>
            We are <span>HonourCreators</span>
          </h3>
          <hr />
          <p>
            HonourCreators is more than a service providing platform and a
            business tool. It’s the online based service that helps you both
            start your own startup and boost your online presence through
            digital marketing and branding. It’s a all in one solution for all
            you need to make you stand out in the online market.
          </p>
          <h5>Let's know what you can do with us:</h5>
          <ul className='checkmark mb-5'>
            <li>Creating your unique logo design.</li>
            <li>Launching your own website to improve coustomer approach.</li>
            <li>Running digital advertisement online to gain more audience.</li>
            <li>Creating future approached animated videos for more reach.</li>
            <li>Creating brand name via coustom printing and banner.</li>
            <li>Posting your own application to modern playstore.</li>
          </ul>
          <div className='link-holder'>
            <NavLink to='/' className='regular-btn'>
              <GetAppIcon /> Get our mobile app
            </NavLink>
            <NavLink to='/services' className='regular-btn mb-3 mb-md-0'>
              <OpenInNewIcon /> Explore our services
            </NavLink>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <figure>
            <img src={clientimg} className='img-fluid' />
          </figure>
        </div>
      </section>
    </>
  );
};
export default Intro;
