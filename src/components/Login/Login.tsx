import React from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import useForm from '../../hooks/useForm';

export function Login() {
    const [isValid, setIsValid] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<boolean>(false);
    const { form, handleChange } = useForm({
        email: "",
        password: "",
    });

    const checkValidEmail = () => {
        const email = form.email;
        const validEmail: RegExpMatchArray | null = email.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
        if (validEmail === null) {
            return false;
        } else {
            return true;
        }
    }

    const checkValidPassword = () => {
        const password = form.password;
        const validPassword: RegExpMatchArray | null = password.match(/^(?=.*[а-яА-ЯёЁa-zA-Z])(?=.*[$%&_#])[а-яА-ЯёЁa-zA-Z\d$%&_#]{8,}$/iu);
        if (validPassword === null) {
            return false;
        } else {
            return true;
        }
    }

    const setErrors = () => {
        const isValidEmail = checkValidEmail();
        const isValidPassword = checkValidPassword();
        if (
            form.email !== ""
            && form.password !== ""
            && (isValidEmail === false || isValidPassword === false)
        ) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }

    const checkValid = () => {
        const isValidEmail = checkValidEmail();
        const isValidPassword = checkValidPassword();
        debugger;
        if (
            form.email !== ""
            && form.password !== ""
            && isValidEmail === true
            && isValidPassword === true
        ) {
            setIsValid(true);
            setIsError(false);
        } else {
            setIsValid(false);
        }
    }

    React.useEffect(() => {
        checkValid();
    }, [form])

    return <main className='login'>
        <img className='login__logo' alt='Логотип' src={logo} />
        <form className="login__form" name="loginForm" noValidate>
            <div className="login__content">
                <input
                    type="email"
                    className="login__input"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="login__input"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Пароль"
                    required
                />
                <span className="login__error">{isError ? "Неверный email или пароль. Попробуйте ещё раз или восстановите пароль." : ""}</span>
            </div>
            <button className={isValid ? "login__save" : "login__save_disabled"} type="button" onClick={setErrors}>ВОЙТИ</button>
        </form>
        <p className='login__element'>Забыли пароль?</p>
        <ul className='login__links'>
            <li className='login__link login__link_vk'></li>
            <li className='login__link login__link_google'></li>
            <li className='login__link login__link_yandex'></li>
        </ul>
    </main>
}