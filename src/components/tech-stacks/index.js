
import { Container } from 'reactstrap';
import techImg from "../../assets/images/home/texh-stack2.png";

const TechStacks = () => {
  return (
    <section className='tech-stacks' id='tech-stack'>
      <Container>
        <h2 className='text-center main-title'>Tech Stack That We Follow</h2>
        <img src={techImg} className='img-fluid' alt="techImg" />
      </Container>
    </section>
  )
}

export default TechStacks