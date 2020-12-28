import React from 'react';
import clientimg from '../images/clientimg.webp';
import ServicePageFrame from '../CustomComponents/ServicePageFrame';
import AdMakingData from '../Database/AdMakingData';
import FixedContact from '../CustomComponents/FixedContact';

const AdMaking = () => {
  return (
    <>
      <ServicePageFrame
        h3='Every Startup Needs a Logo'
        p='create your new logo today'
        h1='Ad Making with HonourCreators'
        linkName='All Services'
        linkAddress='/services'
        heading='Why you need a'
        headspan='Ad'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis reprehenderit et aliquam nisi nam consectetur corporis error, modi ullam fugiat necessitatibus quod ratione, magnam aut impedit, sint voluptatem sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt quo cupiditate ad, corporis, repellendus error totam a neque qui itaque iste, nisi quisquam omnis. Quo omnis accusantium facilis reprehenderit.'
        benifitheader='Benifits of getting a logo from honourcreators:'
        benifit1='Unique Identity'
        benifit2='Customized Price'
        benifit3='Three different formats delivery'
        linkaddress1='/contact'
        linkaddress2='/contact'
        imgDivClasses='service-img ad-making'
        sampleheader='Ad'
        database={AdMakingData}
        formdescription='get you ad done'
        option1='₹4,999-₹9,999'
        option2='₹10,000-₹50,000'
        option3='Coustomised Price'
      />
      <FixedContact />
    </>
  );
};
export default AdMaking;
