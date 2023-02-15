import React from 'react';
import './Footer.scss';
import { ReactComponent as Phone } from '../../assets/Images/Footer-images/phone.svg';
import { ReactComponent as Location } from '../../assets/Images/Footer-images/location.svg';
import { ReactComponent as Email } from '../../assets/Images/Footer-images/email.svg';
import { ReactComponent as Instagram } from '../../assets/Images/Footer-images/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/Images/Footer-images/telegram.svg';
import { ReactComponent as Facebook } from '../../assets/Images/Footer-images/facebook.svg';
import { ReactComponent as Youtube } from '../../assets/Images/Footer-images/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container footer-container'>
        <ul className='footer-contacts'>
          <li className='footer-contacts__item'>
            <div className='footer-contacts__image'><Phone className='phone-svg' width={64}/></div>
            <div className='footer-contacts__info'>
              <h3>Номер для связи</h3>
              <a href="tel:+998555031010">+998 55 503 1010</a>
            </div>
          </li>
          <li className='footer-contacts__item'>
            <div className='footer-contacts__image'><Location className='location-svg' width={64}/></div>
            <div className='footer-contacts__info'>
              <h3>Наш адрес</h3>
              <a href="/">Toshkent sh. Furqat 23 A</a>
            </div>
          </li>
          <li className='footer-contacts__item'>
            <div className='footer-contacts__image'><Email className='email-svg' width={64}/></div>
            <div className='footer-contacts__info'>
              <h3>Наша почта</h3>
              <a href="mailto:infoedugately@gmail.com">infoedugately@gmail.com</a>
            </div>
          </li>
        </ul>

        <div className='social-media'>
          <h3>Наши соц.сети</h3>
          <ul>
            <li><a href="https://www.instagram.com/"><Instagram className='instagram' /></a></li>
            <li><a href="https://www.telegram.com/"><Telegram className='telegram' /></a></li> 
            <li><a href="https://www.facebook.com/"><Facebook className='facebook' /></a></li> 
            <li><a href="https://www.youtube.com/"><Youtube className='youtube' /></a></li> 
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer