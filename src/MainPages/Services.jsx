import React from 'react';
import Header from '../CustomComponents/Header';
import OurServiceCard from '../CustomComponents/OurServiceCard';
import OurServiceData from '../Database/OurServiceData';
import Footer from '../CustomComponents/Footer';
import FixedContact from '../CustomComponents/FixedContact';

const Services = () => {
  return (
    <>
      <Header
        h3='All that you need is here'
        p='explore more with us'
        h1='Our Services - Get everything here'
        linkName='Back to Home'
        linkAddress='/'
      />
      <section className='container row gy-4 mx-auto our-services'>
        {OurServiceData.map((value, index) => {
          return (
            <OurServiceCard
              p={value.p}
              heading={value.heading}
              description={value.description}
              linkaddress={value.linkaddress}
              imgsrc={value.imgsrc}
              key={index}
            />
          );
        })}
      </section>
      <Footer />
      <FixedContact />
    </>
  );
};
export default Services;
