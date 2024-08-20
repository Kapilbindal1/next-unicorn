
import { Col, Container, Row } from 'reactstrap';
import service1 from "../../assets/images/home/mob-app.png";
import service2 from "../../assets/images/home/web-app.png";
import service3 from "../../assets/images/home/blockchain.png";
import service4 from "../../assets/images/home/qa.png";
import service5 from "../../assets/images/home/game-dev.png";
import service6 from "../../assets/images/home/ui-ux.png";
import service7 from "../../assets/images/home/integration.png";
import service8 from "../../assets/images/home/support.png";

const services = [
  {
    img: service1,
    title: 'Mobile App Development',
    info: 'Innow8 Apps crafts innovative mobile apps that blend functionality and user appeal for business success.'
  },
  {
    img: service2,
    title: 'Web App Development',
    info: 'Your web app partner for cutting-edge tech and user-centric design, driving digital transformation.'
  },
  {
    img: service7,
    title: 'Integration Services',
    info: 'Seamless integration solutions for optimized workflows, connecting your systems effortlessly for enhanced efficiency and productivity'
  },
  {
    img: service8,
    title: 'Software development and Support',
    info: 'Comprehensive software development and support services, ensuring robust solutions and continuous assistance for your evolving needs.'
  },
  {
    img: service3,
    title: 'Blockchain Development',
    info: 'Innow8 Apps: Pioneering blockchain solutions for a world of new possibilities.'
  },
  {
    img: service4,
    title: 'Quality Assurance',
    info: 'Innow8 Apps: Quality-first, flawless solutions.'
  },
  {
    img: service5,
    title: 'Game Development',
    info: 'Innow8 Apps: Crafting top-notch UI/UX for memorable digital experiences.'
  },
  {
    img: service6,
    title: 'UI/UX Design',
    info: 'Innow8 Apps: Crafting top-notch UI/UX for memorable digital experiences.'
  },
]

const Services = () => {
  return (
    <section className='services' id='services'>
      <Container>
        <h2 className='text-center main-title'>Services We Offer</h2>
        <Row>
          {services.map((service, index) => {
            return (
              <Col md={6} lg={4} key={service.title}>
                <div className='service-card'>
                  <div className='service-card__flex'>
                    <div className={`box box-${index}`}>
                      <img src={service.img} className='img-fluid' alt={service.title} />
                    </div>
                    <div className='content'>
                      <h3>{service.title}</h3>
                      <p>{service.info}</p>
                    </div>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services