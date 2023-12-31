
import { Col, Container, Row } from 'reactstrap';
import img1 from "../../assets/images/home/abhi1.webp";
import img2 from "../../assets/images/home/gowri1.webp";
import img3 from "../../assets/images/home/gagan2.webp";
import img4 from "../../assets/images/home/chavi.png";
import CollapseText from '../common/CollapseText';

const personArr = [
  {
    img: img1,
    name: 'Abhishek Kandivalikar (Abhi)',
    desig: 'Designation 1',
    desc: 'Highly experienced Technical Lead and Architect with a profound background in Banking, championing innovation and modernization, while demonstrating exceptional expertise in DevOps leadership, Enterprise Engineering, and API architecture.'
  },
  {
    img: img2,
    name: 'Gowrishankar Gopalakrishna',
    desig: 'Designation 1',
    desc: 'Experienced Middleware Integration manager  with seventeen years of expertise in Tibco Business Works, Adapters, EMS, RV, administrator, and hawk, specializing in high-volume, time-critical middleware components integration across oil,  trading and financial  organizations, and possessing a wide skill set encompassing design, development, testing, migration, and 24/7 production support, as well as proficient in core technologies and management skills.'
  },
  {
    img: img3,
    name: 'Gagandeep Singh Khattar',
    desig: 'Designation 1',
    desc: 'IT professional with 20+ years of industry experience encompassing IT infrastructure support, management, Agile, middleware, and DevOps, with a strong track record in client-facing and managerial roles, a wide range of technical skills including IBM Tivoli, MQ, WebLogic, Connect Direct, TIBCO EMS, and DB management, as well as a successful entrepreneurial background in co-founding and running tech startups in India and the UK and a commitment to philanthropy through founding the Help Thalassemics Trust in India.'
  },
  {
    img: img4,
    name: 'Chavi Jindal',
    desig: 'Designation 1',
    desc: 'Chavi, with over 11 years of experience in web, app, and software development, is the visionary Founder & CEO of Innow8 Apps. He has assembled a dynamic team of experts dedicated to pushing the boundaries of technology and driving innovation. Under Chavi\'s leadership, Innow8 Apps consistently delivers cutting-edge solutions, redefining possibilities in the digital realm.'
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
                <img src={item.img} className='profile img-fluid' alt={item.name} />
                <h3 className='name'>{item.name}</h3>
                {/* <p className='desig'>({item.desig})</p> */}
                <CollapseText desc={item.desc}/>
                {/* {isExpanded ? item.desc : item.desc.slice(0, 100)} */}
                {/* {item.desc.length > 100 && (
                  <span>
                    {isExpanded ? (
                      <button onClick={toggleExpand}>Read Less</button>
                    ) : (
                      <button onClick={toggleExpand}>Read More</button>
                    )}
                  </span>
                )} */}
                {/* <p className='desc'>{item.desc}</p> */}
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default WhoWeAre