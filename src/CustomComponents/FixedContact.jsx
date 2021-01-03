import React from 'react';
import ScrollTop from '../CustomComponents/ScrollTop';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const CallUs = (props) => {
  return (
    <>
      <div className='fixed-contactbar'>
        <a href='tel:9348025940' className='fixed-call'>
          Call Now <CallIcon className='ml-3' />
        </a>
        <a href='mailto:honourcreators@gmail.com' className='fixed-mail'>
          Mail Now <EmailIcon className='ml-3' />
        </a>
        <ScrollTop />
      </div>
    </>
  );
};
export default CallUs;
