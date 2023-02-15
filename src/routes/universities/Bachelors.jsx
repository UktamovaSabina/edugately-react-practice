import React from 'react';
import './Universities.scss';

const Bachelors = () => {
  return (
    <div className='bachelors'>
      <div className='bachelors-info'>
        <h4>Лингвистика</h4>
        <h5>Бакалавриат</h5>
        <p>Институт филологии и языковой коммуникации СФУ</p>
      </div>
      <div className='price'>от <span>39 147</span> р./год</div>
    </div>
  )
}

export default Bachelors