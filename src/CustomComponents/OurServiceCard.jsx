import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const OurServiceCard = (props) => {
  return (
    <>
      <div className='col-md-6'>
        <div class='card ourservice-card mb-3'>
          <div class='row g-0'>
            <div class='col-md-4'>
              <img
                src={props.imgsrc}
                className='img-fluid'
                alt={props.imgsrc}
              />
            </div>
            <div class='col-md-8'>
              <div class='card-body'>
                <p>{props.p}</p>
                <h3 class='card-title'>{props.heading}</h3>
                <p class='card-text'>{props.description}</p>
                <p class='card-text'>
                  <NavLink to={props.linkaddress} className='regular-btn mr-3'>
                    Know More
                    <ArrowForwardIcon className='ml-1' />
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServiceCard;
