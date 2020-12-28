import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <section className=' container-fluid header my-center text-center'>
        <header>
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
          <h1 className='mb-4'>{props.h1}</h1>
          <NavLink to={props.linkAddress} className='white-btn'>
            {props.linkName}
          </NavLink>
        </header>
      </section>
    </>
  );
};
export default Header;
