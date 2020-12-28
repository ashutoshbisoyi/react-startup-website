import React from 'react';
import TestimonialCards from '../CustomComponents/TestimonialCards';
import TestimonialData from '../Database/TestimonialData';

const Testimonial = () => {
  return (
    <>
      <section className='container row gy-4 mx-auto testimonial d-flex justify-content-center'>
        <h3 className='text-center'>
          What coustomers says about <span>HonourCreators</span>
        </h3>
        <hr className='mb-5' />
        {TestimonialData.map((value, index) => {
          return (
            <TestimonialCards
              comment={value.comment}
              imgsrc={value.imgsrc}
              name={value.name}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
};
export default Testimonial;
