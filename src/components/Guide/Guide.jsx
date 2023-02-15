import React from 'react';
import './Guide.scss'
import universitySvg from '../../assets/Images/Guide/university.svg';
import formSvg from '../../assets/Images/Guide/form.svg';
import documentSvg from '../../assets/Images/Guide/document.svg';
import registrationSvg from '../../assets/Images/Guide/registration.svg';
import messageSvg from '../../assets/Images/Guide/message.svg';
import paymentSvg from '../../assets/Images/Guide/payment.svg';

const Guide = () => {

    const guideListEven = [
        {
            img1: universitySvg,
            img2: registrationSvg,
            id1: 1,
            id2: 2,
            title1: 'Ищите программу и университет',
            title2: 'Регистрируетесь на нашем сайте'
        },
        {
            img1: formSvg,
            img2: messageSvg,
            id1: 3,
            id2: 4,
            title1: 'Заполняете анкету и подаете документы',
            title2: 'Получаете ответ от Университета'
        },
        {
            img1: documentSvg,
            img2: paymentSvg,
            id1: 5,
            id2: 6,
            title1: 'Мы отправляем ваши документы',
            title2: 'Оплачиваете за наши услуги'
        }
    ]

    return (
        <section className='guide-section'>
            <div className="container">
                <h2>Как мы работаем</h2>
                <ul>
                    {
                        guideListEven.map(item => {
                            return <React.Fragment key={item.id1}>
                                <li className='odd-steps'>
                                    <div className='image-wrapper__top'>
                                        <img src={item.img1} alt="step" />
                                    </div>
                                    <div className='step'>
                                        <h4>{item.id1}</h4>
                                        <h3>{item.title1}</h3>
                                    </div>
                                </li>
                                <li className='even-steps'>
                                    <div className='step'>
                                        <h4>{item.id2}</h4>
                                        <h3>{item.title2}</h3>
                                    </div>
                                    <div className='image-wrapper__bottom'>
                                        <img src={item.img2} alt="step" />
                                    </div>
                                </li>
                            </React.Fragment>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Guide