
import { Col, Container, Row } from 'reactstrap';
import img1 from "../../assets/images/home/one-min.jpeg";
import img2 from "../../assets/images/home/two-min.jpeg";
import img3 from "../../assets/images/home/three-min.jpeg";
import img4 from "../../assets/images/home/four-min.jpeg";

const personArr = [
  {
    img: img1,
    name: 'Abhishek Kandivalikar (Abhi)',
    desc: 'Highly experienced Technical Lead and Architect with a profound background in Banking, championing innovation and modernization, while demonstrating exceptional expertise in DevOps leadership, Enterprise Engineering, and API architecture.'
  },
  {
    img: img2,
    name: 'Gowrishankar Gopalakrishna',
    desc: 'Experienced Middleware Integration manager  with seventeen years of expertise in Tibco Business Works, Adapters, EMS, RV, administrator, and hawk, specializing in high-volume, time-critical middleware components integration across oil,  trading and financial  organizations, and possessing a wide skill set encompassing design, development, testing, migration, and 24/7 production support, as well as proficient in core technologies and management skills.'
  },
  {
    img: img3,
    name: 'Gagandeep Singh Khattar',
    desc: 'IT professional with 20+ years of industry experience encompassing IT infrastructure support, management, Agile, middleware, and DevOps, with a strong track record in client-facing and managerial roles, a wide range of technical skills including IBM Tivoli, MQ, WebLogic, Connect Direct, TIBCO EMS, and DB management, as well as a successful entrepreneurial background in co-founding and running tech startups in India and the UK and a commitment to philanthropy through founding the Help Thalassemics Trust in India.'
  },
  {
    img: img4,
    name: 'Chavi Jindal',
    desc: 'With 11+ years in web, app, and software realms, Chavi is the Founder & CEO of Innow8 Apps. He\'s curated a dynamic team of experts, dedicated to shaping the future today, propelling innovation at every step.'
  },
]

const WhoWeAre = () => {
  return (
    <section className='who-we-are' id='who-we-are'>
      <Container>
        <h2 className='text-center main-title'>Who We Are</h2>
        <Row>
          {personArr.map((item) => {
            return (
              <Col md={6} lg={3}>
                <img src={item.img} className='profile' alt={item.name} />
                <h3 className='name'>{item.name}</h3>
                <p className='desc'>{item.desc}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default WhoWeAre