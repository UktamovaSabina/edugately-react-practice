import React from 'react';
import './Universities.scss';
import Faculties from './Faculties';
import Bachelor from './Bachelors';

const Universities = () => {
  return (
    <section className='universities-section'>
        <div className="container">
            <h3>Список найденых вузов</h3>
            <Faculties/>
            <Bachelor/>
            <Bachelor/>
            <Bachelor/>
            <Bachelor/>
            <Bachelor/>
            <Faculties/>
            <Faculties/>
            <Faculties/>
        <div className='pagination'>
            <span>Всего 15</span>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>...</li>
                <li>21</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Universities