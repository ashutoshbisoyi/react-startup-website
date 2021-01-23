import React from 'react';

const TestimonialCards = (props) => {
  return (
    <>
      <div>
        <div className='testimonial-card'>
          <h5>{props.comment}</h5>
          <img src={props.imgsrc} alt={props.imgsrc} />
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCards;
