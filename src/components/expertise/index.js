
import { Container } from 'reactstrap';
import img1 from "../../assets/images/expertise/tibc.png";
import img2 from "../../assets/images/expertise/aws.png";
import img3 from "../../assets/images/expertise/open.png";
import img4 from "../../assets/images/expertise/azure.png";
import img5 from "../../assets/images/expertise/ibm-tivoli.png";
import img6 from "../../assets/images/expertise/cvent.png";
import img7 from "../../assets/images/expertise/pm-institute.png";
import img8 from "../../assets/images/expertise/ibm-mq.png";
import img9 from "../../assets/images/expertise/safe.png";
import img10 from "../../assets/images/expertise/mule.png";
import Slider from 'react-slick';

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
  {
    img: img8
  },
  {
    img: img9
  },
  {
    img: img10
  },
]

const Expertise = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='expertise' id='expertise'>
      <Container>
        <h2 className='main-title text-center'>Our Expertise</h2>
        <Slider {...settings}>
        {expertiseLogo.map((item, index) => {
            return (
              <div className='expertise-logo__box'>
                <img src={item.img} className={`img-fluid ${index === 1 ? 'img1' : index === 3 ? "img3" : index === 8 ? 'img2' : ''}`} alt="expertise" />
              </div>
            )
          })}
        </Slider>
      </Container>
      {/* <Container>
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
      </Container> */}
    </section>
  )
}

export default Expertise