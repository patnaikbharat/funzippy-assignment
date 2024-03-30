import {Component} from 'react'
import Navbar from '../Navbar'
import PageFlip from '../PageFlip'
import Footer from '../Footer'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <Navbar />
          <div className="banner-container">
            <img
              src="https://res.cloudinary.com/dso1ok93b/image/upload/v1711777480/Screenshot_2024-03-30_110329_njrxog.png"
              className="banner-image"
              alt="banner"
            />
          </div>
          <div className="intro-container">
            <div className="name-container">
              <h1 className="name">Ritesh Debtath</h1>
              <p className="name-description alignment">
                We look forward to building life filled with love and countless
                memories. We are excited to share our joy
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dso1ok93b/image/upload/v1711777479/Screenshot_2024-03-30_110341_x8xz6y.png"
              className="intro-image"
              alt="intro"
            />
            <div className="dup-name-container">
              <h1 className="name">Faya Syarma</h1>
              <p className="name-description">
                We look forward to building life filled with love and countless
                memories. We are excited to share our joy
              </p>
            </div>
          </div>
          <div className="schedules-container">
            <h1 className="schedules-heading">Schedules</h1>
            <img
              src="https://res.cloudinary.com/dso1ok93b/image/upload/v1711777479/Screenshot_2024-03-30_110417_vvages.png"
              alt="schedule"
            />
          </div>
          <div className="question-container">
            <form className="form-container">
              <h1 className="form-heading">Are you attending ?</h1>
              <input type="text" placeholder="Name" className="input" /> <br />
              <hr />
              <input type="text" placeholder="Email" className="input" /> <br />
              <hr />
              <div className="whole-flex-container">
                <div className="flex-container">
                  <input
                    type="radio"
                    id="yes"
                    className="radio-input"
                    name="statement"
                  />
                  <label htmlFor="yes" className="label-text">
                    Yes, I will be there
                  </label>
                </div>
                <div className="flex-container">
                  <input
                    type="radio"
                    id="no"
                    className="radio-input"
                    name="statement"
                  />
                  <label htmlFor="no" className="label-text">
                    Sorry, I cant come
                  </label>{' '}
                  <br />
                </div>
              </div>
              <input
                type="text"
                placeholder="Number Of Guests"
                className="input"
              />{' '}
              <br />
              <hr />
              <input
                type="text"
                placeholder="What Will You Be Attending"
                className="input"
              />{' '}
              <br />
              <hr />
              <button type="submit" className="form-button">
                RSVP
              </button>
            </form>
          </div>
          <div className="timeline-main-container">
            <h1 className="schedules-heading">When & Where</h1>
            <div className="timeline-container">
              <div className="timeline">
                <img
                  src="https://res.cloudinary.com/dso1ok93b/image/upload/v1711777479/Screenshot_2024-03-30_110434_izb6tq.png"
                  alt="reception"
                />
                <h1 className="event">The Reception</h1>
                <p className="time">Monday, 12 Apr. 2024, 1.00 PM - 2.30 PM</p>
                <p className="venue">
                  Blue Ginger Lawn Taj West End 25, Race Course Road, Bengaluru,
                  560001
                </p>
              </div>
              <div className="timeline">
                <img
                  src="https://res.cloudinary.com/dso1ok93b/image/upload/v1711777479/Screenshot_2024-03-30_110441_fagyvx.png"
                  alt="ceremony"
                />
                <h1 className="event">The Ceremony</h1>
                <p className="time">Monday, 15 Apr. 2024 1.00 PM-2.30 PM</p>
                <p className="venue">
                  Blue Ginger Lawn Taj West End 25, Race Course Road, Bengaluru,
                  560001
                </p>
              </div>
              <div className="timeline">
                <img
                  src="https://res.cloudinary.com/dso1ok93b/image/upload/v1711777479/Screenshot_2024-03-30_110448_phkhet.png"
                  alt="party"
                />
                <h1 className="event">The Party</h1>
                <p className="time">Monday, 25 Apr. 2024 1.00 PM-2.30 PM</p>
                <p className="venue">
                  Blue Ginger Lawn Taj West End 25, Race Course Road, Bengaluru,
                  560001
                </p>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.1033550824413!2d77.5849028458694!3d12.983409899292294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae175e359efb0b%3A0x6220eec1ea4d3db0!2sBlue%20Ginger%20at%20Taj%20West%20End%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1711784102769!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
              className="map-view"
            >
              .
            </iframe>
          </div>
        </div>
        <div className="album-container">
          <h1 className="album-heading">Album</h1>
          <PageFlip />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
