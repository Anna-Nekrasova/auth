import React from 'react';
import './Header.css';
import logo from '../../images/logo_header.svg';
import location from '../../images/navigation.svg';
import user from '../../images/user.svg';

export function Header() {
    return (
        <header className='header'>
            <div className='header__menu'>
                <button className='header__button'></button>
                <img className='header__logo' alt='Логотип' src={logo} />
            </div>
            <img className='header__logo header__logo_center' alt='Логотип' src={logo} />
            <section className="header__search">
                <form className="header__search-form" name="searchForm">
                    <button className="header__search-button" type="submit"></button>
                    <div className="header__search-content">
                        <input type="text" className="header__search-field" name="searchField" placeholder="Поиск" required />
                    </div>
                </form>
            </section>
            <section className='header__aside'>
                <div className='header__location'>
                    <img className='header__location-image' alt='Месторасположение' src={location} />
                    <p className='header__location-city'>Санкт-Петербург</p>
                </div>
                <button className='header__login'>ВОЙТИ</button>
                <img className='header__login-image' alt='Пользователь' src={user} />
            </section>
        </header>
    );
};