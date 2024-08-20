import { Card, Col, Container, Row } from "reactstrap";
import expIcon from "../../assets/images/home/exp.png";
import techIcon from "../../assets/images/home/tech.png";
import sectorIcon from "../../assets/images/home/sector.png";
import regulatoryIcon from "../../assets/images/home/regulatory.png";
import icon1 from "../../assets/images/home/icon1.png";
import icon2 from "../../assets/images/home/icon2.png";
import icon3 from "../../assets/images/home/icon3.png";
import icon4 from "../../assets/images/home/icon4.png";

const safeCards = [
  {
    lineImg: icon1,
    icon: expIcon,
    heading: 'Experience',
    info: 'Managed by seasoned professionals with 15+ years of experience and delivery to hundreds of clients.'
    // info: 'Managed by seasoned professionals with a combined 50+ years of experience.'
  },
  {
    lineImg: icon2,
    icon: techIcon,
    heading: 'Technical Mastery',
    info: 'Profound expertise in steering technical systems and driving transformation within large organizations.'
  },
  {
    lineImg: icon3,
    icon: sectorIcon,
    heading: 'Sector Depth',
    info: 'An impeccable understanding of the intricacies within the Banking and Financial Services sectors.'
  },
  {
    lineImg: icon4,
    icon: regulatoryIcon,
    heading: 'Regulatory Proficiency',
    info: 'Equipped to navigate complex regulatory landscapes while serving large customer bases in the millions.'
  },
]

const SafeHands = () => {
  return (
    <section className="safe-hands">
      <Container>
        <h2 className="text-center">In the safe hands</h2>
        <Row className="justify-content-center">
          {safeCards.map((item, index) => {
            return (
              <Col md={3} lg={3} className="safe-col">
                <Card>
                  <img src={item.lineImg} className="img-fluid line" alt="" />
                  <div className={`icon-box icon-box-${index}`}>
                    <img src={item.icon} className="img-fluid icon" alt="" />
                  </div>
                  <h3 className="heading">{item.heading}</h3>
                  <p className="info">{item.info}</p>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default SafeHands
