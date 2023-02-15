import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/Images/Logo.svg';
import {NavLink} from 'react-router-dom';
import {FiPhone} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';

const Header = () => {
  return (
    <header>
        <ul className='navbar'>
            <li className='logo'>
                <NavLink exact to="/"><Logo /></NavLink>
            </li>
            <li>
                <NavLink activeClassName='active-navbar-item' className='navbar-item' to='/universities'>Вузы</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active-navbar-item' className='navbar-item' to='/specialities'>Специальности</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active-navbar-item' className='navbar-item' to='/partner'>Стать партнером</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active-navbar-item' className='navbar-item' to='/about'>О нас</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active-navbar-item' className='navbar-item' to='/guide'>Как это работает</NavLink>
            </li>
        </ul>

        <ul className='header-contact-list'>
            <li><FiPhone/></li>
            <li><FiUser/></li>
            <li className='header-lang'>RU</li>
            <li><input className='search-input' type="search" placeholder='Поиск'/></li>
        </ul>
    </header>
  )
}

export default Header