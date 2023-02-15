import React from 'react';
import heroImg from '../../assets/Images/Hero-image/teachers.png';
import './Hero.scss';

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="container hero-container">
                <div className='hero__info'>
                    <h2>Выберите свой университет с <span>Edugately</span></h2>
                    <p>Edugately помогает абитуриентам выбрать профессию, найти свое направление и поступить в престижные вузы СНГ и Европы.</p>
                    <h4>Свяжитесь с нами по телефону</h4>
                    <div className='hero-links'>
                        <a className='hero-link' href="tel:+998555031010">Позвонить</a>
                        <a className='hero-link hero-link2' href="mailto:infoedugately@gmail.com">Задать вопрос</a>
                    </div>
                </div>
                <img src={heroImg} alt="teachers" />
            </div>
        </section>
    )
}

export default Hero