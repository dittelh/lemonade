import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './About.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      effect: 'cards',
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });

    // Clean up function to destroy Swiper instance
    return () => {
      swiper.destroy();
    };
  }, []); // empty dependency array means it will run only once after the initial render

  return (
    <div>
      <section>
        <div className="content">
          <div className="info">
          <h1 className="Cronus-font">Om os</h1>
            <p>
              Vores lemonader er håndlavede kunstværker, der leverer den
              perfekte balance mellem sødme, syrlighed og forfriskning.
              <br />
              <br />
              Fra den sprøde citron til det saftige jordbær, tager vores udvalg
              af lemonader dig med på en smagsrejse gennem frugtens fortryllende
              verden.
              <br />
              <br />
              Vores lemonader er ikke kun en drik, de er en livsstil - en
              invitation til at nyde hverdagens simple glæder og dele ren
              velvære med dem omkring os.
            </p>
            <Link to="/">
              <Button variant="primary" className="btn">
                SHOPPEN
              </Button>
            </Link>
          </div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <h2>KLASSISK LEMONADE</h2>
              </div>

              <div className="swiper-slide">
                <h2>JORDBÆR-NADE</h2>
              </div>

              <div className="swiper-slide">
                <h2>MOJITO</h2>
              </div>

              <div className="swiper-slide">
                <h2>MIXONADE</h2>
              </div>
            </div>
          </div>
        </div>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};

export default About;
