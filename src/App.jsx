import React from "react";
import jumbotron__bg from "./img/jumbotron__bg.png";
import logo from "./img/logo.png";
import footer from "./img/footer.png";
import jumbotron__mobile from "./img/jumbotron__mobile.png";
import text__section__bg from "./img/text__section__bg.png";

function App() {
  return (
    <>
      <div id="home" className="home__jumbotron__wrapper">
        <div className="home__navigation__wrapper">
          <div className="home__navigation__logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="home__navigation__navbar">
            <ul>
              <li>
                <a href="#">SignUp</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home__jumbotron__bg__wrapper">
          <img
            className="home__jumbotron__bg__img"
            src={jumbotron__bg}
            alt="bg image"
          />
        </div>
        <div className="home__jumbotron__content__overlay">
          <div className="home__jumbotron__content">
            <div className="home__jumbotron__content__left">
              <h1 className="home__jumbotron__content__left__heading">
                Introducing Picode Landing Page
              </h1>
              <p className="home__jumbotron__content__left__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nesciunt id nulla iste ab ea repudiandae tenetur
                accusamus possimus in.
              </p>
              <a href="#" className="home__jumbotron__content__left__button">
                Join as Partner
              </a>
            </div>
            <div className="home__jumbotron__content__right">
              <img src={jumbotron__mobile} alt="mobile" />
            </div>
          </div>
        </div>
      </div>
      <section className="cards__container">
        <div className="card">
          <div className="card__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              className="card__img__svg"
            >
              <g id="clock" transform="translate(-0.5 -0.5)">
                <circle
                  id="Ellipse_24"
                  data-name="Ellipse 24"
                  cx="15.5"
                  cy="15.5"
                  r="15.5"
                  transform="translate(2 2)"
                  fill="none"
                  stroke="#0e0e17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_889"
                  data-name="Path 889"
                  d="M12,6v9.346l6.231,3.115"
                  transform="translate(5.577 2.231)"
                  fill="none"
                  stroke="#0e0e17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>
          <div className="card__heading">Save your Time</div>
          <div className="card__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, id.
          </div>
          <div className="card__link">
            <a href="#">More &#8594;</a>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              className="card__img__svg"
            >
              <g id="clock" transform="translate(-0.5 -0.5)">
                <circle
                  id="Ellipse_24"
                  data-name="Ellipse 24"
                  cx="15.5"
                  cy="15.5"
                  r="15.5"
                  transform="translate(2 2)"
                  fill="none"
                  stroke="#0e0e17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_889"
                  data-name="Path 889"
                  d="M12,6v9.346l6.231,3.115"
                  transform="translate(5.577 2.231)"
                  fill="none"
                  stroke="#0e0e17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>
          <div className="card__heading">Save your Time</div>
          <div className="card__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, id.
          </div>
          <div className="card__link">
            <a href="#">More &#8594;</a>
          </div>
        </div>
        <div className="card">
          <div className="card__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              className="card__img__svg"
            >
              <g id="clock" transform="translate(-0.5 -0.5)">
                <circle
                  id="Ellipse_24"
                  data-name="Ellipse 24"
                  cx="15.5"
                  cy="15.5"
                  r="15.5"
                  transform="translate(2 2)"
                  fill="none"
                  stroke="#0e0e17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_889"
                  data-name="Path 889"
                  d="M12,6v9.346l6.231,3.115"
                  transform="translate(5.577 2.231)"
                  fill="none"
                  stroke="#0e0e17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>
          <div className="card__heading">Save your Time</div>
          <div className="card__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, id.
          </div>
          <div className="card__link">
            <a href="#">More &#8594;</a>
          </div>
        </div>
      </section>
      <section id="app" className="text__section">
        <div className="text__section__wrapper">
          <img src={text__section__bg} alt="bg__text__section" />
          <div className="text__section__wrapper__overlay">
            <div className="text__section__content">
              <h2 className="text__section__content__heading">
                Introducing Picode Landing Page
              </h2>
              <div className="text__section__content__para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi illo quasi quas quod maiores quis!
              </div>
              <a href="" className="text__section__content__button">
                Download App
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="chat" className="chat__section">
        <div className="chat__section__container">
          <div className="chat__section__content">
            <h2 className="chat__section__heading">Start chat on WhatsApp</h2>
            <div className="chat__section__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              magnam sunt assumenda quam, pariatur ipsum!
            </div>
            <a href="#" className="chat__section__button">
              Chat Now
            </a>
          </div>
        </div>
      </section>
      <footer className="footer__section">
        <div className="footer__section__bg">
          <img src={footer} alt="footer" />
        </div>
        <div className="footer__section__content">
          <div className="footer__section__newsletter">
            <h2 className="footer__section__heading">
              Don't miss out. Stay update
            </h2>
            <form action="" className="footer__section__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__section__email"
              />
              <input
                type="submit"
                placeholder="Subscribe"
                className="footer__section__button"
              />
            </form>
          </div>
          <nav className="footer__section__menu">
            <ul className="footer__section__list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#app">App</a>
              </li>
              <li>
                <a href="#chat">Chat</a>
              </li>
              <li>
                <a href="#home">Partner</a>
              </li>
            </ul>
          </nav>
          <div className="footer__section__copyright">
            &copy; All copyright are reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
