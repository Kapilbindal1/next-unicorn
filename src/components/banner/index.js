
import React from 'react';
import { Container } from 'reactstrap';
import banner from "../../assets/images/home/banner.png";

const Banner = () => {
  return (
    <section className='banner'>
      <Container>
        <div className='banner-content'>
          <h1>Your Reliable Custom Software<br /> Development Partner</h1>
          {/* <h1 className='mobile'>Your Reliable Custom Software Development Partner</h1> */}
          <p>We specialize in providing software development services</p>
          <a href="#contact" className='banner-btn'>Get Free Trial</a><br />
          <img src={banner} className='img-fluid' alt="banner" />
        </div>
      </Container>
    </section>
  )
}

export default Banner