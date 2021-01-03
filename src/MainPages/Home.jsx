import React from 'react';
import Header from '../CustomComponents/Header';
import CallIcon from '@material-ui/icons/Call';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Intro from '../CustomComponents/Intro';
import FixedContact from '../CustomComponents/FixedContact';
import Why from '../CustomComponents/Why';
import CallUs from '../CustomComponents/CallUs';
import Testimonial from '../CustomComponents/Testimonial';
import Footer from '../CustomComponents/Footer';

const Home = () => {
  return (
    <>
      <Header
        h3='New Startup! Want to grow digitally?'
        p='meet your new partner'
        h1='HonourCreators :) Your digital partner'
        icon1={<CallIcon />}
        li1='+91 9777111809'
        icon2={<LanguageIcon />}
        li2='www.honourcreators.com'
        icon3={<MailOutlineIcon />}
        li3='honourcreators@gmail.com'
        linkName='Get Started'
        linkAddress='/services'
      />
      <Intro />
      <Why />
      <FixedContact />
      <CallUs />
      <Testimonial />
      <Footer />
    </>
  );
};
export default Home;
{
  /* <CountUp end={100} /> */
}
{
  /* <section className='container row mx-auto'>
  <div className='col-md-4'>
    <img src={logoimg} alt='logo' />
  </div>
</section>; */
}
