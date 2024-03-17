import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';

export function Login() {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isValid, setIsValid] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);

    const checkValid = () => {
        const validEmail: RegExpMatchArray | null = email.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
        const validPassword: RegExpMatchArray | null = password.match(/^(?=.*[а-яА-ЯёЁa-zA-Z])(?=.*[$%&_#])[а-яА-ЯёЁa-zA-Z\d$%&_#]{8,}$/iu);
        if (validEmail === null || validPassword === null) {
            setIsValid(false);
            setIsError(true);
        } else {
            setIsValid(true);
            setIsError(false);
        }
    }

    return <main className='login'>
        <img className='login__logo' alt='Логотип' src={logo} />
        <form className="login__form" name="loginForm" noValidate>
            <div className="login__content">
                <input
                    type="email"
                    className="login__input"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="login__input"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                    required
                />
                <span className="login__error">{isError ? "Неверный email или пароль. Попробуйте ещё раз или восстановите пароль." : ""}</span>
            </div>
            <button className={isValid ? "login__save" : "login__save_disabled"} type="button" onClick={checkValid}>ВОЙТИ</button>
        </form>
        <p className='login__element'>Забыли пароль?</p>
        <ul className='login__links'>
            <li className='login__link login__link_vk'></li>
            <li className='login__link login__link_google'></li>
            <li className='login__link login__link_yandex'></li>
        </ul>
    </main>
}