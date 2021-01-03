import React from 'react';
import { NavLink } from 'react-router-dom';
import honourcreatorsimg from '../images/honourcreatorsimg.png';
import ClientCard from '../CustomComponents/ClientCard';
import TestimonialData from '../Database/TestimonialData';
import Footer from '../CustomComponents/Footer';
import FixedContact from '../CustomComponents/FixedContact';

const About = () => {
  return (
    <>
      <section className='container-fluid header my-center text-center'>
        <header>
          <p>Who are HonourCreators ?</p>
          <h1 className='mb-4'>About Us - Everything you want to know</h1>
          <NavLink to='./contact' className='white-btn'>
            Contact Us
          </NavLink>
        </header>
      </section>
      <div className='about-fixed-image'></div>
      <section className='about-hc'>
        <div className='row container mx-auto'>
          <div className='col-md-10'>
            <h3>
              About <span>HonourCreators</span>
            </h3>
            <hr />
            <p>
              <strong>HonourCreators</strong> is established in the year of
              2020, holding a tagline
              <strong> ' Your Vision, Our Creation '</strong>. It is a technical
              organization in the field of digital communication and content
              creation, giving importance to customer satisfaction with the help
              of latest Technologies, Research, Innovation and
              Quality-expertise. In a crowded and ever-changing industry, we
              make it a priority to stay ahead of the game. Led by a phenomenal
              management staff, we’re always educating ourselves, keeping up
              with the trends, and adding new services that we believe will
              assist in our clients’ growth. The end goal is customer success
              and we’re not satisfied until that success is reached: even if it
              requires extra time and resources on our end. We’re firm believers
              that the success of our clients is truly our success; we’d be
              nowhere without them..
            </p>
          </div>
          <div className='col-md-2 my-center'>
            <img
              src={honourcreatorsimg}
              className='img-fluid'
              alt='honourcreators'
            />
          </div>
        </div>
      </section>
      <section className='container'>
        <h2>
          Our Proud <span>Customers</span>
        </h2>
        <hr className='mb-3' />
        <div className='row container mx-auto'>
          {TestimonialData.map((value, index) => {
            return (
              <ClientCard
                clientimg={value.imgsrc}
                clientname={value.name}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <Footer />
      <FixedContact />
    </>
  );
};
export default About;
