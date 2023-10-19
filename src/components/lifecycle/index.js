

import { Col, Container, Row } from 'reactstrap';
import lifecycleImg from "../../assets/images/home/comprehensive.png";

const Lifecycle = () => {
  return (
    <section className='lifecycle' id='lifecycle'>
      <Container>
        <h2 className='main-title text-center'>Comprehensive Project Lifecycle</h2>
        <Row className='justify-content-center'>
          <Col md={4} lg={4}>
            <img src={lifecycleImg} className='img-fluid' alt="lifecycleImg" />
          </Col>
          <Col md={6} lg={6}>
            <div className='lifecycle-content'>
              <h3 className='sub-title'>Strategic Project Assessment</h3>
              <p className='desc'>We oversee all phases, from requirements analysis and solution design to rigorous testing and agile project management.</p>
              <h3 className='sub-title'>Proven Track Record</h3>
              <p className='desc'>Your projects are entrusted to hands that have successfully delivered similar endeavors multiple times, significantly reducing risk.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Lifecycle