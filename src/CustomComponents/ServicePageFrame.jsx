import React from 'react';
import Header from '../CustomComponents/Header';
import ServiceIntro from '../CustomComponents/ServiceIntro';
import ServiceSample from '../CustomComponents/ServiceSample';
import OrderForm from '../CustomComponents/OrderForm';
import CallUs from '../CustomComponents/CallUs';
import Footer from '../CustomComponents/Footer';

const ServicePageFrame = (props) => {
  return (
    <>
      <Header
        h3={props.h3}
        p={props.p}
        h1={props.h1}
        linkName={props.linkName}
        linkAddress={props.linkAddress}
      />
      <ServiceIntro
        heading={props.heading}
        headspan={props.headspan}
        description={props.description}
        benifitheader={props.benifitheader}
        benifit1={props.benifit1}
        benifit2={props.benifit2}
        benifit3={props.benifit3}
        linkaddress1={props.linkaddress1}
        linkaddress2={props.linkaddress2}
        imgDivClasses={props.imgDivClasses}
      />
      <CallUs />
      <ServiceSample header={props.sampleheader} database={props.database} />
      <OrderForm
        formdescription={props.formdescription}
        option1={props.option1}
        option2={props.option2}
        option3={props.option3}
      />
      <Footer />
    </>
  );
};
export default ServicePageFrame;
