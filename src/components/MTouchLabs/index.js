import './index.css'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {IoIosArrowUp} from 'react-icons/io'
import NavBar from '../NavBar'
import ServicesComponent from '../ServicesComponent'

const MTouchLabs = () => (
  <>
    <div className="top-container">
      <NavBar />
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638936363/dots_1_p85wub.svg"
          alt="dotos"
          className="dots-img"
        />
      </div>
      <div className="company-description">
        <div className="heading-appstore-container">
          <h1 className="company-description-heading">
            A Complete Rent Payments
          </h1>
          <div className="app-store-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638939382/google-play_1_3_o9athw.svg"
              className="google-play"
              alt="google play"
            />
            <div className="available-container">
              <p className="available-p">Available on</p>
              <h1 className="play-heading">Play store</h1>
            </div>
          </div>
        </div>
        <div className="round-img-container">
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638882036/banner_image_nhi23c.svg"
            alt="round-img"
            className="round-img"
          />
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638938418/dot3_kujgst.svg"
            alt="dotos"
            className="dots-img1"
          />
        </div>
      </div>
    </div>
    <div className="about-us-container">
      <div className="about-us-card">
        <img
          src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638882110/Rectangle_1659_ukvf4z.svg"
          alt="diamond"
          className="half-circle1"
        />

        <div>
          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638882165/Subtract_nhjzwm.svg"
            alt="half-circle"
            className="half-circle"
          />

          <img
            src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638944214/about_us_bwvkcz.svg"
            alt="about us"
            className="about-us-img"
          />

          <div className="full-circle-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638938418/dot3_kujgst.svg"
              alt="dots"
              className="dots"
            />
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638881994/Ellipse_185_yxmjwb.svg"
              alt="diamond"
              className="half-circle1"
            />
          </div>
        </div>

        <div className="about-us-description">
          <h1 className="company-description-heading">ABOUT US</h1>
          <p className="about-us-description-para">
            CHECK MARK is a digital payment service provide platforms where you
            can get instant funds for your utilities bill payments through our
            credit card payment system. CHECK MARK is expanding the bill payment
            sector by facilitating Full-spectrum bill payment through the Mobile
            App, Web, ATP(Any-Time-Payment) Kiosk, PoS machines, and Mobile Van.
            The name of CHECK MARK denotes the importance it provides for secure
            transactions and to make life simpler through its innovations.
          </p>
          <div className="full-circle-container1">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638881994/Ellipse_185_yxmjwb.svg"
              alt="diamond"
              className="half-circle1"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="full-circle-container1">
      <img
        src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638882110/Rectangle_1659_ukvf4z.svg"
        alt="diamond"
        className="half-circle1"
      />
    </div>

    <ServicesComponent />

    <div className="request-free-consultation">
      <div className="service-content">
        <h1 className="company-description-heading">
          Request Free Consultation
        </h1>

        <div className="form-card">
          <h1 className="form-heading">Please fill in the form below.</h1>
          <div className="input-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638961299/profile_zqwpjy.svg"
              alt="person"
              className="icon"
            />
            <input type="text" placeholder="Name" className="input-el" />
          </div>
          <div className="input-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638961315/email_dm5d2u.svg"
              alt="person"
              className="icon"
            />
            <input type="text" placeholder="Email" className="input-el" />
          </div>
          <div className="input-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638961307/call_deep2u.svg"
              alt="person"
              className="icon"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="input-el"
            />
          </div>
          <div className="input-container">
            <RiContactsBook2Fill className="icon" color="#000099" />
            <input
              type="text"
              placeholder="Contact Number"
              className="input-el"
            />
          </div>
          <div className="input-container">
            <textarea rows="6" cols="70" className="input-el">
              Type your message
            </textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="content-inside-footer">
        <div className="bottom-first">
          <h1 className="h-container">h</h1>
          <p className="social-media-heading">
            Check mark is an indian leading platform for all your utility
            payments which provides real time payments
          </p>
          <div className="social-media-icon-container">
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638965836/twitter_dxp5uc.svg"
              alt="twitter"
              className="social-icon"
            />
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638965917/facebook_aokura.svg"
              alt="twitter"
              className="social-icon"
            />
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638965847/instagram_i6zbpi.svg"
              alt="twitter"
              className="social-icon"
            />
            <img
              src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1638965826/youtube_mmhtcv.svg"
              alt="twitter"
              className="social-icon"
            />
          </div>
        </div>
        <div className="bottom-first">
          <h1 className="h-container1">Contact Info</h1>
          <p className="social-media-heading">
            Plot No.-28 Road No.3 Santoshimatha Colony Hyderabad Telangana
            (India)
          </p>
          <p className="social-media-heading">+91-91xxxxxxx</p>
          <p className="social-media-heading">
            support@xxxxxx.in Timings – 10am to 6p
          </p>
        </div>
        <div className="bottom-first">
          <h1 className="h-container1">Services</h1>
          <p className="social-media-heading">Return & Refund</p>
          <p className="social-media-heading">Term & Condition</p>
          <p className="social-media-heading">Contact Us</p>
          <p className="social-media-heading">Privacy Policy</p>
        </div>
        <div className="bottom-first">
          <h1 className="h-container1">Contact Info</h1>
          <p className="social-media-heading">Home</p>
          <p className="social-media-heading">About</p>
          <p className="social-media-heading">Payout</p>
          <p className="social-media-heading">BBPS</p>
        </div>
      </div>
      <div className="navigate-top-container">
        <div className="navigate-icon">
          <IoIosArrowUp color="#ffffff" />
        </div>
      </div>
      <div>
        <p className="social-media-heading s-m-1">
          © 2021 All Rights Reserved. Developed By CHECKmark
        </p>
      </div>
    </div>
  </>
)

export default MTouchLabs
