import React from 'react';
import './Comments.scss';
import avatar from '../../assets/Images/Comments/avatar.png';
import arrowLeft from '../../assets/Images/Comments/arrow-to-left.png';
import arrowRight from '../../assets/Images/Comments/arrow-to-right.png';
import dots from '../../assets/Images/Comments/dots.svg';

const Comments = () => {
    const users = [
        {
            id: 1,
            avatar: avatar,
            fullName: 'ИМЯ ФАМИЛИЯ',
            univer: 'УНИВЕРСИТЕТ',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            avatar: avatar,
            fullName: 'ИМЯ ФАМИЛИЯ',
            univer: 'УНИВЕРСИТЕТ',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '
        }
    ]
    return (
        <section className='comments-section'>
            <div className="container">
                <h3>Что говорят наши студенты?</h3>
                <ul>
                    {
                        users.map(user => {
                            return <li>
                                <img src={user.avatar} alt="photos of a student" />
                                <div className='comments-info'>
                                    <h4>{user.fullName}</h4>
                                    <h5>{user.univer}</h5>
                                    <p>{user.feedback}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <div className='pagination'>
                    <img src={arrowLeft} alt="swipe to left" />
                    <img src={dots} alt="pagination" />
                    <img src={arrowRight} alt="swipe to right" />
                </div>
            </div>
        </section>
    )
}

export default Comments