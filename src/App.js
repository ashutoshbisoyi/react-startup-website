import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './MainPages/Home';
import Services from './MainPages/Services';
import About from './MainPages/About';
import Demo from './MainPages/Demo';
import LogoDesigning from './Servicepage/LogoDesigning';
import AdMaking from './Servicepage/AdMaking';
import BusinessConsulting from './Servicepage/BusinessConsulting';
import VideoMaking from './Servicepage/VideoMaking';
import CustomPrinting from './Servicepage/CustomPrinting';
import PosterMaking from './Servicepage/PosterMaking';
import GraphicsDesigning from './Servicepage/GraphicsDesigning';
import WebDevelopment from './Servicepage/WebDevelopment';
import Navbar from './CustomComponents/Navbar';
import NavScroll from './CustomComponents/NavScroll';
import DigitalMarketing from './Servicepage/DigitalMarketing';
import AppDevelopment from './Servicepage/AppDevelopment';

function App() {
  return (
    <>
      <Navbar />
      <NavScroll>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/about' component={About} />
          <Route exact path='/demo' component={Demo} />
          <Route
            exact
            path='/services/logodesigning'
            component={LogoDesigning}
          />
          <Route exact path='/services/admaking' component={AdMaking} />
          <Route
            exact
            path='/services/businessconsulting'
            component={BusinessConsulting}
          />
          <Route exact path='/services/videomaking' component={VideoMaking} />
          <Route
            exact
            path='/services/customprinting'
            component={CustomPrinting}
          />
          <Route exact path='/services/postermaking' component={PosterMaking} />
          <Route
            exact
            path='/services/graphicsdesigning'
            component={GraphicsDesigning}
          />
          <Route
            exact
            path='/services/webdevelopment'
            component={WebDevelopment}
          />
          <Route
            exact
            path='/services/appdevelopment'
            component={AppDevelopment}
          />
          <Route
            exact
            path='/services/digitalmarketing'
            component={DigitalMarketing}
          />
          <Redirect to='/' />
        </Switch>
      </NavScroll>
    </>
  );
}

export default App;
