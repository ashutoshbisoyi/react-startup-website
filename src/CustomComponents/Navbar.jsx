import React from 'react';
import { NavLink } from 'react-router-dom';
import hcImg from '../assets/images/honourcreators.png';

const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav-container' id='navid'>
        <nav className='navbar navbar-expand-lg navbar-light container'>
          <div className='container-fluid'>
            <NavLink className='navbar-brand' to='/'>
              <img src={hcImg} alt={'HonourCreators'} />
              <span className='brand-name'>HonourCreators</span>
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    exact
                    activeClassName='active-navlink'
                    className='nav-link mx-2'
                    aria-current='page'
                    to='/'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    activeClassName='active-navlink'
                    className='nav-link mx-2'
                    to='/services'
                  >
                    Services
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    activeClassName='active-navlink'
                    className='nav-link mx-2'
                    to='/about'
                  >
                    About
                  </NavLink>
                </li>
                <li className='nav-item my-center'>
                  <NavLink
                    activeClassName='active-navlink'
                    className='nav-link nav-demo'
                    to='/demo'
                  >
                    Demo
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
