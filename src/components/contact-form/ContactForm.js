import React, { useState } from "react";
import Mailer from "./Mailer";
import { messageBody, validationRegex } from "./config"
import { toast } from 'react-toastify';
import contactBg from "../../assets/images/home/contact-bg.png";

const ContactForm = () => {
  const initialContactDetails = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    // industry: "",
    // description: "",
  };

  const [contactDetails, setContactDetails] = useState(initialContactDetails);
  const [contactError, setContactError] = useState([]);

  const validation = () =>{
    const { fName, lName, email, phone } = contactDetails;
    console.log('key, valuekey, valuekey, value');
    let error = []
    if(fName === ''){
      error['fName'] = 'Please enter first name'
    }
    if(lName === ''){
      error['lName'] = 'Please enter last name'
    }
    if(email !== ''){
      if(!email.match(validationRegex["email"])){
        error['email'] = 'Please enter a valid email'
      }
    }else{
      error['email'] = 'Please enter email'
    }
    if(phone !== ''){
      if(!phone.match(validationRegex["phone"])){
        error['phone'] = 'Please enter 10 digits phone number'
      }
    }else{
      error['phone'] = 'Please enter phone number'
    }
      return error
    }
    const handleContactFormChange = (key, value) => {
      let error = {...contactError}
      error[key] = ''
      setContactError(error)
      setContactDetails((prevContactDetails) => ({
        ...prevContactDetails,
        [key]: value,
      }));
    };
  
    const handleContactFormSend = async (e) => {
      e.preventDefault();
      const { fName, lName, email, phone, industry, description } = contactDetails;
      if(Object.keys(validation()).length === 0){
      const result = await Mailer(messageBody(fName, lName, email, phone, industry, description));
      if(result === 200){
        toast.success('Your message has been send successfully, We will get back to you shortly.', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
        setContactDetails(initialContactDetails);
      }else{
        setContactError(validation())
      }
    };
  return (
    <div className="contact-form__main" id="contact">
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <div className="image">
            <img src={contactBg} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-7 col-lg-7">
          <div className="content">
            <h3 className="title mb-8">Contact Information</h3>
            <form>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className="input-field"
                      name="fName"
                      placeholder="John"
                      value={contactDetails.fName}
                      onChange={(e) =>
                        handleContactFormChange("fName", e.target.value)
                      }
                    />
                    {contactError.fName !== '' && <p className="error">{contactError.fName}</p>}
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      className="input-field"
                      name="lName"
                      placeholder="Doe"
                      value={contactDetails.lName}
                      onChange={(e) =>
                        handleContactFormChange("lName", e.target.value)
                      }
                    />
                    {contactError.lName !== '' && <p className="error">{contactError.lName}</p>}
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="input-field"
                      name="email"
                      placeholder="name@example.com"
                      value={contactDetails.email}
                      onChange={(e) =>
                        handleContactFormChange("email", e.target.value)
                      }
                    />
                    {contactError.email !== '' && <p className="error">{contactError.email}</p>}
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="">Phone</label>
                    <input
                      type="number"
                      className="input-field"
                      name="phone"
                      placeholder="1234567890"
                      value={contactDetails.phone}
                      onChange={(e) =>
                        handleContactFormChange("phone", e.target.value)
                      }
                    />
                    {contactError.phone !== '' && <p className="error">{contactError.phone}</p>}
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                  <div className="mb-3">
                    <label htmlFor="">Industry</label>
                    <input
                      type="text"
                      className="input-field2"
                      name="industry"
                      placeholder="software"
                      value={contactDetails.industry}
                      onChange={(e) =>
                        handleContactFormChange("industry", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-12">
                <label htmlFor="">Your Message</label>
                  <textarea
                    rows="3"
                    placeholder="Your Message"
                    className="input-field resize-none"
                    value={contactDetails.description}
                    onChange={(e) =>
                      handleContactFormChange("description", e.target.value)
                    }
                  ></textarea>
                </div>
                <div className="col-md-12 col-lg-12 text-center text-md-end">
                  <div className="msg-button">
                    <button
                      className="primary-btn send-btn mt-8 mr-8"
                      onClick={handleContactFormSend}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
