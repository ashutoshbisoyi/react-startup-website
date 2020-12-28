import React from 'react';
import Header from '../CustomComponents/Header';
import ServiceDemoFrame from '../CustomComponents/ServiceDemoFrame';
import AdMakingData from '../Database/AdMakingData';
import BusinessConsultingData from '../Database/BusinessConsultingData';
import CustomPrintingData from '../Database/CustomPrintingData';
import GraphicsDesigningData from '../Database/GraphicsDesigningData';
import LogodesigningData from '../Database/LogodesigningData';
import PosterMakingData from '../Database/PosterMakingData';
import VideoMakingData from '../Database/VideoMakingData';
import WebDevelopmentData from '../Database/WebDevelopmentData';
import Footer from '../CustomComponents/Footer';
import FixedContact from '../CustomComponents/FixedContact';

const Demo = () => {
  return (
    <>
      <Header
        h3='Want to see some demos of our service?'
        p='get wide range of digital services here'
        h1='Work Demo - HonourCreators'
        linkName='Contact Us'
        linkAddress='/contact'
      />
      <ServiceDemoFrame servicename='Ad Making' databasename={AdMakingData} />
      <ServiceDemoFrame
        servicename='Business Consulting'
        databasename={BusinessConsultingData}
      />
      <ServiceDemoFrame
        servicename='Custom Printing'
        databasename={CustomPrintingData}
      />
      <ServiceDemoFrame
        servicename='Graphics Designing'
        databasename={GraphicsDesigningData}
      />
      <ServiceDemoFrame
        servicename='Logo Designing'
        databasename={LogodesigningData}
      />
      <ServiceDemoFrame
        servicename='Poster Making'
        databasename={PosterMakingData}
      />
      <ServiceDemoFrame
        servicename='Video Making'
        databasename={VideoMakingData}
      />
      <ServiceDemoFrame
        servicename='Web Development'
        databasename={WebDevelopmentData}
      />
      <Footer />
      <FixedContact />
    </>
  );
};
export default Demo;
