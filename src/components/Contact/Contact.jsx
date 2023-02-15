import React from 'react';
import './Contact.scss';
import callingGirl from '../../assets/Images/Contact/girl-on-the-phone.png';
import robot from '../../assets/Images/Contact/robot-verify.png';

const Contact = () => {
    return (
        <section className='contact-section'>
            <div className="container">
                <form>
                    <h3>Свяжитесь с нами</h3>
                    <div className='inputs-wrapper'>
                        <div className='form-input'>
                            <label htmlFor="phone-number">Ваш номер телефона</label>
                            <input type="tel" name='phone-number' id="phone-number" placeholder='Номер' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="full-name">Ваше ФИО</label>
                            <input type="text" name="fullname" id="full-name" placeholder='Фамилия Имя Отчество' />
                        </div>
                    </div>
                    <div className='submit'>
                        <button>Отправить</button>
                        <img src={robot} alt="verify robot" />
                    </div>
                </form>
                <img src={callingGirl} alt="the woman talking on the phone" />
            </div>
        </section>
    )
}

export default Contact