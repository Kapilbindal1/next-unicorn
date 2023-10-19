

import React from 'react'
import Banner from '../../components/banner'
import Expertise from '../../components/expertise'
import Lifecycle from '../../components/lifecycle'
import SafeHands from '../../components/safe-hands'
import WhoWeAre from '../../components/who-we-are'
import TechStacks from '../../components/tech-stacks'
import OurStory from '../../components/our-story'
import Services from '../../components/services'
import Organizations from '../../components/organizations'
import ContactForm from '../../components/contact-form/ContactForm'

const Home = () => {
  return (
    <>
      <Banner />
      <Expertise />
      <Lifecycle />
      <SafeHands />
      <WhoWeAre />
      <TechStacks />
      <OurStory />
      <Services />
      <section className="contact-form" id="contact-us">
        <div className="container">
          <ContactForm />
        </div>
      </section>
      <Organizations />
    </>
  )
}

export default Home