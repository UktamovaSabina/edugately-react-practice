import React from 'react';
import './Universities.scss';
import logo1 from '../../assets/Images/Universities/univer-logo.png';
import logo2 from '../../assets/Images/Universities/univer-logo2.png';

const Faculties = () => {

  const univerList = [
    {
      id: 1,
      logo: logo1,
      univer: 'Ставропольский филиал МИРЭА — Российского технологического университета',
      faculty: '12 факультетов',
      address: 'Россия, г.Москва'
    },
    {
      id: 2,
      logo: logo2,
      univer: 'Сибирский федеральный университет',
      faculty: '12 факультетов',
      address: 'Россия, г.Москва'
    }
  ]

  return (
    <ul className='univer-choice'>
      {
        univerList.map(univer => {
          return <li key={univer.id}>
            <div className='univer-title'>
              <img src={univer.logo} alt="logo of the univer" />
              <h4>{univer.univer}</h4>
            </div>

            <div className='univer-settings'>
              <select placeholder={univer.faculty}>
                <option value={univer.faculty}>{univer.faculty}</option>
                <option value={univer.faculty}>faculty 1</option>
                <option value={univer.faculty}>faculty 2</option>
              </select>

              <span>{univer.address}</span>
            </div>

          </li>
        })
      }
    </ul>
  )
}

export default Faculties