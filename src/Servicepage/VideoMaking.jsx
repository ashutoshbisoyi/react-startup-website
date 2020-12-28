import React from 'react';
import clientimg from '../images/clientimg.webp';
import ServicePageFrame from '../CustomComponents/ServicePageFrame';
import VideoMakingData from '../Database/VideoMakingData';
import FixedContact from '../CustomComponents/FixedContact';

const VideoMaking = () => {
  return (
    <>
      <ServicePageFrame
        h3='A intresting video makes you memorable'
        p='make your new video today'
        h1='Video Making with HonourCreators'
        linkName='Order Now'
        linkAddress='/services'
        heading='Why A Video is'
        headspan='Important'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis reprehenderit et aliquam nisi nam consectetur corporis error, modi ullam fugiat necessitatibus quod ratione, magnam aut impedit, sint voluptatem sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt quo cupiditate ad, corporis, repellendus error totam a neque qui itaque iste, nisi quisquam omnis. Quo omnis accusantium facilis reprehenderit.'
        benifitheader='Benifits of getting a logo from honourcreators:'
        benifit1='Unique Identity'
        benifit2='Customized Price'
        benifit3='Three different formats delivery'
        linkaddress1='/contact'
        linkaddress2='/contact'
        imgDivClasses='service-img video-making'
        sampleheader='Video'
        database={VideoMakingData}
        formdescription='get your new video'
        option1='₹4,999-₹9,999'
        option2='₹10,000-₹50,000'
        option3='Coustomised Price'
      />
      <FixedContact />
    </>
  );
};
export default VideoMaking;
