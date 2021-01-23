import React, { useEffect, useState } from 'react';
import TestimonialCards from '../CustomComponents/TestimonialCards';
import TestimonialData from '../Database/TestimonialData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
const Testimonial = () => {
  SwiperCore.use([Autoplay]);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(windowDimensions.width);
  return (
    <>
      <section className='container row gy-4 mx-auto testimonial d-flex justify-content-center'>
        <h3 className='text-center'>
          What coustomers says about <span>HonourCreators</span>
        </h3>
        <hr className='mb-5' />
        <Swiper
          spaceBetween={50}
          slidesPerView={windowDimensions.width < 600 ? 1 : 3}
          onSlideChange={() => console.log('slide change')}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className='swiper'
        >
          {TestimonialData.map((value, index) => {
            return (
              <SwiperSlide>
                <TestimonialCards
                  comment={value.comment}
                  imgsrc={value.imgsrc}
                  name={value.name}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default Testimonial;
