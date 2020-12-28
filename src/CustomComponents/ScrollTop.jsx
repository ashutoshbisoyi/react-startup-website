import React, { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ScrollTop = () => {
  const [showIcon, updateShowIcon] = useState(false);
  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      updateShowIcon(true);
    } else if (window.pageYOffset < 400) {
      updateShowIcon(false);
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a
        className='fixed-up'
        onClick={scrollTop}
        style={{ opacity: showIcon ? '1' : '0' }}
      >
        Call Now <ArrowUpwardIcon className='ml-3' />
      </a>
    </>
  );
};
export default ScrollTop;
