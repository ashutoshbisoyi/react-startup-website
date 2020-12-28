import React from 'react';
import ServicePageFrame from '../CustomComponents/ServicePageFrame';
import FixedContact from '../CustomComponents/FixedContact';
import DigitalMarketingData from '../Database/DigitalMarketingData';
const DigitalMarketing = () => {
  return (
    <>
      <ServicePageFrame
        h3='Marketing helps you grow'
        p='market yourself in a better way'
        h1='Digital Marketing with HonourCreators'
        linkName='All Services'
        linkAddress='/services'
        heading='Why you need'
        headspan=' Digital Marketing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis reprehenderit et aliquam nisi nam consectetur corporis error, modi ullam fugiat necessitatibus quod ratione, magnam aut impedit, sint voluptatem sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt quo cupiditate ad, corporis, repellendus error totam a neque qui itaque iste, nisi quisquam omnis. Quo omnis accusantium facilis reprehenderit.'
        benifitheader='Benifits of getting a logo from honourcreators:'
        benifit1='Unique Identity'
        benifit2='Customized Price'
        benifit3='Three different formats delivery'
        linkaddress1='/contact'
        linkaddress2='/contact'
        imgDivClasses='service-img digital-marketing'
        sampleheader='Ad'
        database={DigitalMarketingData}
        formdescription='get you ad done'
        option1='₹4,999-₹9,999'
        option2='₹10,000-₹50,000'
        option3='Coustomised Price'
      />
      <FixedContact />
    </>
  );
};
export default DigitalMarketing;
