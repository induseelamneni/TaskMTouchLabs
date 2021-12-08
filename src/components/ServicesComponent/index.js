import './index.css'
import {FaLongArrowAltRight} from 'react-icons/fa'

const ServicesComponent = () => (
  <div className="services-bg">
    <div className="heading-container">
      <h1 className="company-description-heading">Services</h1>
      <div className="content-container">
        <div className="services-description">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638882070/services1_hmn4sa.svg"
            alt="service1"
            className="service-img"
          />

          <h1 className="payment-method-heading">Utility Payment</h1>
          <p className="payment-method-para">
            CHECK MARK facilitates bill payment for the categories ...
          </p>
          <FaLongArrowAltRight color="#ffffff" className="arrow-icon" />
        </div>

        <div className="services-description">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638882054/services2_mnzqcl.svg"
            alt="service1"
            className="service-img"
          />

          <h1 className="payment-method-heading">Payment Gateway</h1>
          <p className="payment-method-para">
            CHECK MARK facilitates bill payment for the categories ...
          </p>
          <FaLongArrowAltRight color="#ffffff" className="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
)

export default ServicesComponent
