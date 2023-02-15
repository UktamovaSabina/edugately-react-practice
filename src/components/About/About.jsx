import React from 'react';
import './About.scss';
import teacher from '../../assets/Images/About/teacher-man.png'

const About = () => {

    const universityData = [
        {
            id: 1,
            title: 'Университеты',
            description: 'Сотрудничает с образованием из более чем 20 университета из разных уголков мира',
            num: '20+'
        },
        {
            id: 2,
            title: 'Филиали',
            description: 'Edugately сотрудничает с более 250 филиали с разных уголков мира',
            num: '250+'
        },
        {
            id: 3,
            title: 'Страны партнёры',
            description: 'Edugately сотрудничает с более 16 странами с разных уголков мира',
            num: '16+'
        },
    ]
    return (
        <section className='about-section'>
            <div className="container about-container">
                <img src={teacher} alt="teacher" />
                <div className='about-info'>
                    <h3>О нас в цифрах</h3>
                    <ul>
                        {
                            universityData.map(data => {
                                return <li key={data.id}>
                                    <div className='datas'>
                                        <h4>{data.title}</h4>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className='statistics'>
                                        <span>
                                            {data.num}
                                        </span>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                    <button>Свяжитесь с нами</button>
                </div>
            </div>
        </section>
    )
}

export default About