
import { Col, Container, Row } from 'reactstrap';
import couttsImg from "../../assets/images/home/coutts.png";
import royalImg from "../../assets/images/home/royal-london.png";
import natwestImg from "../../assets/images/home/natwest.png";
import masterImg from "../../assets/images/home/master-card.png";
import schrodersImg from "../../assets/images/home/schroders.png";

const Organizations = () => {
  return (
    <>
      <section className='organizations'>
        <Container>
          <h2 className='main-title text-center'>Organisations we helped</h2>
          <div className='organizations-cards'>
            <div className='card card-1'>
              <img src={couttsImg} className='img-fluid' alt="" />
              <div className='upper-card-1'>
                <img src={natwestImg} className='img-fluid' alt="" />
              </div>
              <div className='upper-card-2'>
                <img src={masterImg} className='img-fluid' alt="" />
              </div>
            </div>
            <div className='card card-2'>
              <img src={royalImg} className='img-fluid' alt="" />
              <div className='upper-card-3'>
                <img src={schrodersImg} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='organizations-mobile'>
      <Container>
        <h2 className='main-title text-center'>Organisations we helped</h2>
        <Row>
          <Col md={6}>
            <div className='card'>
              <img src={couttsImg} className='img-fluid' alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className='card'>
              <img src={masterImg} className='img-fluid' alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className='card'>
              <img src={royalImg} className='img-fluid' alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className='card'>
              <img src={natwestImg} className='img-fluid' alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className='card'>
              <img src={schrodersImg} className='img-fluid' alt="" />
            </div>
          </Col>
        </Row>
      </Container>  
    </section>
    </>
  )
}

export default Organizations