import './index.css'

const Navbar = () => (
  <nav className="nav-container">
    <h1 className="nav-heading">Wedding</h1>
    <ul className="nav-item-container">
      <a href="home" className="nav-item">
        HOME
      </a>
      <a href="schedules" className="nav-item">
        SCHEDULES
      </a>
      <a href="rsvp" className="nav-item">
        RSVP
      </a>
      <a href="gallery" className="nav-item">
        GALLERY
      </a>
      <a href="gift-registry" className="nav-item">
        GIFT REGISTRY
      </a>
    </ul>
  </nav>
)

export default Navbar
