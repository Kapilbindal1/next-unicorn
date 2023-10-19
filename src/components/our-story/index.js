
import { Container } from 'reactstrap';
import icon1 from "../../assets/images/home/story.png";
import icon2 from "../../assets/images/home/story2.png";
import icon3 from "../../assets/images/home/story3.png";

const OurStory = () => {
  return (
    <section className='our-story'>
      <Container>
        <h2 className='main-title'>Our Story</h2>
        <p className='info'>Former colleagues from Natwest, we started Wishhealth India to solve the issue of accessing doctors in India but had to close it down as a failed startup. Now, with extensive experience, we collaborate with Innow8apps to assist organizations in their digital transformations</p>
      </Container>
      <img src={icon1} className='img-fluid icon1' alt="" />
      <img src={icon2} className='img-fluid icon2' alt="" />
      <img src={icon3} className='img-fluid icon3' alt="" />
    </section>
  )
}

export default OurStory