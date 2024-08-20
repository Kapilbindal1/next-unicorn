
import phone from "../assets/images/common/phone.png";
import email from "../assets/images/common/email.png";
import address from "../assets/images/common/address.png";
import logo from "../assets/images/common/logo-white.png";

const contactDetails = [
  {
    id: 1,
    country: "UK",
    phone: "+44 20 8129 4676",
    // phone: "+44 758 841 8605",
    phoneLink: "+442081294676",
    // phoneLink: "+447588418605",
    email: "info@nextuicorn.uk",
    emailLink: "info@nextuicorn.uk",
    // address: "11 Rydons Lane, Coulsdon, CR5 1SU, UK",
    address: "167-169, Great Portland Street, 5th floor, London, W1W 5PF",
  },
  {
    id: 2,
    country: "India",
    phone: "+91 988 888 6602",
    phone2: "+91 991 537 6280",
    phoneLink: "+919888886602",
    email: "contact@innow8apps.com",
    emailLink: "bbhatia@innow8apps.com",
    address:
      "910B, Bestech Business Tower Sector 66, Mohali, Punjab India, 160066",
  },
  {
    id: 3,
    country: "Canada",
    phone: "+1 (604) 374-5278",
    phoneLink: "+16043745278",
    email: "contact@whitenappsolutions.com",
    emailLink: "contact@whitenappsolutions.com",
    address:
      "Whiten App Solutions Inc. 422 Richards St unit 170, Vancouver, BC V6B 2Z4, Canada",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <img src={logo} className="img-fluid logo" alt="" />
          </div>
          {contactDetails.map((item) => {
            console.log(item,'item')
            return (
              <div className="col-md-6 col-lg-3" key={item.id}>
                <h4 className="country">{item.country}</h4>
                <ul>
                  <li>
                    <img
                      src={phone}
                      width={24}
                      className="icon"
                      height={24}
                      alt="phone"
                    />
                    <a href={`tel:${item.phoneLink}`}>{item.phone}{item.id === 2 ? ", " : ""}</a>
                    <a href={`tel:${item.phone2}`} className="ml-4">
                      {item.phone2}
                    </a>
                  </li>
                  <li>
                    <img
                      src={email}
                      width={24}
                      className="icon"
                      height={24}
                      alt="email"
                    />
                    <a href={`mailto:${item.emailLink}`}>{item.email}</a>
                  </li>
                  <li>
                    <img
                      src={address}
                      width={24}
                      height={24}
                      className="icon"
                      alt="address"
                    />
                    {item.address}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer