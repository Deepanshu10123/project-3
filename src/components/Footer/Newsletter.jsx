import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="New Letter" />
      <h1 className='headtext__cormorant'>Susbcribe to our news letter</h1>
      <p className='p__opensans'>And never miss our latest Updates</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your Email' />
      <button className='custom__button'>Susbcribe</button>
    </div>
  </div>
);

export default Newsletter;
