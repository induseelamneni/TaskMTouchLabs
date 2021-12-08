import './index.css'

const NavBar = () => (
  <div className="nav-bar">
    <div className="tabs-container">
      <p className="tab-name">home</p>
      <p className="tab-name">about</p>
      <p className="tab-name">service</p>
      <p className="tab-name">contact us</p>
    </div>
    <div className="btn-container">
      <button type="button" className="btn login-btn">
        LOG IN
      </button>
      <button type="button" className="btn sign-up">
        SIGN UP
      </button>
    </div>
  </div>
)

export default NavBar
