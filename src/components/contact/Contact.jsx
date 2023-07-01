import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from 'react-icons/fa';
import shapeOne from '../../asserts/shape-1.png';
import './contact.css';
import axios from 'axios';


const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            "https://sheet.best/api/sheets/c8c77d90-4b96-4e6b-8336-a758364f8a9f",
            form
        ).then(() => {
            setForm({name: '', email: '', subject: '', message: ''});
        });
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Контакты</h2>
        <p className="section__subtitle">
            Скажи мне <span>Свой Запрос</span>
        </p>
        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap />
                    </span>
                    <h3 className="contact__card-title">Адрес</h3>
                    <p className="contact__card-data">ул. Магдалина Бешкекова д. 5, Ташкент, Узбекистан</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>
                    <h3 className="contact__card-title">Менеджер по продажам</h3>
                    <p className="contact__card-data">Иван Антонов</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>
                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">permikov134@yandex.ru</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook />
                    </span>
                    <h3 className="contact__card-title">Телефон</h3>
                    <p className="contact__card-data">+7 904 944-90-30</p>
                </div>
            </div>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Ваше Полное Имя <b>*</b>
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={form.name}
                            className="contact__form-input"
                        />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Ваш Email <b>*</b>
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={form.email}
                            className="contact__form-input"
                        />
                    </div>
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">
                        Ваше Предложение <b>*</b>
                    </label>
                    <input type="text" className="contact__form-input" />
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">
                        Ваше Сообщение <b>*</b>
                    </label>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        value={form.message}
                        className='contact__form-input'
                    />
                </div>
                <div className="contact__submit">
                    <button type="submit" className="btn text-cs">
                        Отправить
                    </button>
                </div>
            </form>
        </div>
        <div className='section__deco deco__left'>
            <img src={shapeOne} alt='' className='shape'/>
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">Связаться со мной</span>
        </div>
    </section>
  );
};

export default Contact;
