import React, { useEffect, useState } from 'react';
import ServiceSampleCard from '../CustomComponents/ServiceSampleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

const ServiceSample = (props) => {
  const Database = props.database;
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
      <section className='container mx-auto service-sample'>
        <h3 className='serviceheader text-center'>
          HonourCreator's <span>{props.header} Sample</span>
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
          {Database.map((value, index) => {
            return (
              <SwiperSlide>
                <ServiceSampleCard
                  imgsrc={value.imgsrc}
                  h4={value.h4}
                  p={value.p}
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
export default ServiceSample;
