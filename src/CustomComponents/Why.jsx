import React from 'react';
import { NavLink } from 'react-router-dom';
import customprice from '../images/customprice.png';
import time from '../images/time.png';
import quality from '../images/quality.png';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const Why = () => {
  return (
    <>
      <section className='container row gx-md-4 mx-auto intro why'>
        <div className='col-md-7 order-2 pl-md-5'>
          <h3>
            Why only <span>HonourCreators ?</span>
          </h3>
          <hr />
          <p>
            There are number of service providers in the market, let's know the
            top reasons to choose only HonourCreators
          </p>
          <h5>Let's know what you can do with us:</h5>
          <ul>
            <li>
              <img src={customprice} alt='quality' />
              <div>
                <h4>Customised Budget</h4>
                <h5>
                  You decide the price, we will provide best service within that
                  range.
                </h5>
              </div>
            </li>
            <li>
              <img src={time} alt='quality' />
              <div>
                <h4>Work on Time</h4>
                <h5>
                  We value your time, we assure a complete delivery with in your
                  time period.
                </h5>
              </div>
            </li>
            <li className='mb-5'>
              <img src={quality} alt='quality' />
              <div>
                <h4>Quality Sevices</h4>
                <h5>
                  Quality assurance is our key, get the best quality according
                  to your price.
                </h5>
              </div>
            </li>
          </ul>
          <div className='link-holder'>
            <NavLink to='/services' className='regular-btn'>
              <OpenInNewIcon /> Explore our services
            </NavLink>
            <NavLink to='/demo' className='regular-btn mb-3 mb-md-0'>
              <OpenInNewIcon /> See some Demo
            </NavLink>
          </div>
        </div>
        <div className='col-md-5 order-1 why-img-col'></div>
      </section>
    </>
  );
};
export default Why;
