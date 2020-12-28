import React from 'react';
import { NavLink } from 'react-router-dom';
import GetAppIcon from '@material-ui/icons/GetApp';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = (props) => {
  return (
    <>
      <footer className='container-fluid'>
        <div className='container row mx-auto'>
          <div className='col-md-6'>
            <h2>HonourCreators</h2>
            <p>Copyright © 2020 HonourCreators All Rights Reserved.</p>
            <p className='mb-5'>
              At HonourCreators, we are committed to putting our users first.
              This means being open about how we use and protect the data that
              you entrust with us. With this in mind, we have updated our
              Privacy Policy.
            </p>
            <NavLink to='/' className='white-btn'>
              <GetAppIcon /> Get our mobile app
            </NavLink>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6'>
                <h3>Contact</h3>
                <hr />
                <ul>
                  <li>
                    <a href='#'>
                      <CallIcon /> +919777111809
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <MailIcon /> honourcreators@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <LanguageIcon /> www.honourcreators.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-6'>
                <h3>Our Services</h3>
                <hr />
                <div className='d-flex'>
                  <ul className='mr-3'>
                    <li>
                      <NavLink to='/services/logodesigning'>
                        Logo Desgining
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/services/admaking'>Ad Making</NavLink>
                    </li>
                    <li>
                      <NavLink to='/services/businessconsulting'>
                        Business Consulting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/services/videomaking'>Video Making</NavLink>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <NavLink to='/services/customprinting'>
                        Custom Printing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/services/postermaking'>
                        Poster Making
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/services/graphicsdesigning'>
                        Graphics Designing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/services/webdevelopment'>
                        Web Development
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-12 social-media'>
                <h3>Social Media</h3>
                <hr />
                <ul>
                  <li>
                    <a
                      href='https://www.linkedin.com/company/honourcreators/'
                      target='_blank'
                      rel='noopener'
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/honourcreators/'
                      target='_blank'
                      rel='noopener'
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/honourcreators/'
                      target='_blank'
                      rel='noopener'
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://api.whatsapp.com/send?phone=919348025940&amp;text=&amp;source=&amp;data='
                      target='_blank'
                      rel='noopener'
                    >
                      <WhatsAppIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='developer'>
        <p>
          Handcrafted by team <a href='#'>HonourCreators</a>
        </p>
      </div>
    </>
  );
};
export default Footer;
