import React from 'react';
const ServiceSampleCard = (props) => {
  return (
    <>
      <div className='service-card'>
        <img
          src={props.imgsrc}
          className='card-img-top img-fluid'
          alt={props.imgsrc}
        />
        <div className='card-body'>
          <h4 className='card-text'>{props.h4}</h4>
          <p className='card-text'>{props.p}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceSampleCard;
