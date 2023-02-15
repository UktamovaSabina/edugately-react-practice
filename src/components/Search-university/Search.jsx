import React from 'react';
import './Search.scss';
import { FiSearch } from 'react-icons/fi';
import SearchingGirl from '../../assets/Images/Search-university/girl-laptop.png';
import uuid from 'react-uuid';

const Search = () => {
    const searchCategories = [
        'выберите Направление',
        'выберите Степень',
        'выберите Страну'
    ]
    return (
        <section className='search-section'>
            <div className="container search-container">
                <div className='search-info'>
                    <h3>Найти <span>Университет</span></h3>
                    {
                        searchCategories.map(c => {
                            return <select className='category-select' key={uuid()}>
                                <option value={c}>{c}</option>
                                <option value={c}>{c}</option>
                                <option value={c}>{c}</option>
                            </select>
                        })
                    }
                    <button type='search'><FiSearch className='search-icon' /></button>
                </div>
                <img src={SearchingGirl} alt="girl searching on laptop" />
            </div>
        </section>
    )
}

export default Search