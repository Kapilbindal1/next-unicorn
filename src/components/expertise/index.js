
import { Container } from 'reactstrap';
import img1 from "../../assets/images/expertise/tibc.png";
import img2 from "../../assets/images/expertise/aws.png";
import img3 from "../../assets/images/expertise/open.png";
import img4 from "../../assets/images/expertise/pm-institute.png";
import img5 from "../../assets/images/expertise/ibm-tivoli.png";
import img6 from "../../assets/images/expertise/safe.png";
import img7 from "../../assets/images/expertise/ibm-mq.png";

const expertiseLogo = [
  {
    img: img1
  },
  {
    img: img2
  },
  {
    img: img3
  },
  {
    img: img4
  },
  {
    img: img5
  },
  {
    img: img6
  },
  {
    img: img7
  },
]

const Expertise = () => {
  return (
    <section className='expertise' id='expertise'>
      <Container>
        <h2 className='main-title text-center'>Our Expertise</h2>
        <div className='expertise-logo'>
          {expertiseLogo.map((item) => {
            return (
              <div className='expertise-logo__box'>
                <img src={item.img} className='img-fluid' alt="expertise" />
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Expertise