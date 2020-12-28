import React from 'react';
import { NavLink } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const CallUs = () => {
  return (
    <>
      <section className='container-fluid text-center call-us'>
        <h4 className='mb-4'>
          Getting confused! Want a one to one conversation?
        </h4>
        <div className='link-holder my-center'>
          <a href='tel:9777111809' className='white-btn mx-1'>
            <CallIcon /> Call us right now
          </a>
          <a
            href='mailto:ashutoshbisoyi205@gmail.com'
            className='white-btn mx-1'
          >
            <EmailIcon /> Mail us anytime
          </a>
        </div>
      </section>
    </>
  );
};
export default CallUs;
