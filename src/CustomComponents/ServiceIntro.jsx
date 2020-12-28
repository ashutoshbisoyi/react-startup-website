import React from 'react';
import { NavLink } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';

const ServiceIntro = (props) => {
  return (
    <>
      <section className='container row mx-auto intro'>
        <div className='col-md-6'>
          <h3>
            {props.heading} <span>{props.headspan}</span>
          </h3>
          <hr />
          <p>{props.description}</p>
          <h5>{props.benifitheader}</h5>
          <ul className='checkmark mb-md-5'>
            <li>{props.benifit1}</li>
            <li>{props.benifit2}</li>
            <li>{props.benifit3}</li>
          </ul>
          <div className='link-holder'>
            <NavLink to={props.linkaddress1} className='regular-btn mr-3'>
              <GetAppIcon /> Order Now
            </NavLink>
            <NavLink
              to={props.linkaddress2}
              className='regular-btn mr-3 mb-3 mb-md-0'
            >
              <GetAppIcon /> Call Us
            </NavLink>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={props.imgDivClasses}></div>
        </div>
      </section>
    </>
  );
};
export default ServiceIntro;
