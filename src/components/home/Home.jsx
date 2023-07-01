import React from 'react'
import profileImg from '../../asserts/profile.png';
import shapeOne from '../../asserts/shape-1.png';
import shapeTwo from '../../asserts/shape-2.png';
import CV from '../../asserts/NikitaPermyakov_CV.pdf';
import { FaTelegram, FaVk } from 'react-icons/fa';
import './home.css';


export const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__wrapper'>
            <div className='home__container container'>
                <p className='home__subtitle text-cs'>Здравствуйте, <span>я представляю компанию</span></p>
                <h1 className='home__title text-cs'><span>Гранит</span> ИП Пермяков</h1>
                <p className='home__job'>
                    <span className='text-cs'>Мы занимаемся</span><b>природным камнем</b><span className='text-cs'>на Южном урале</span>
                </p>
                <div className='home__img-wrapper'>
                    <div className='home__banner'>
                        <img src={profileImg} alt='' className='home__profile'></img>
                    </div>
                    <p className='home__data home__data-one'>
                        <span className='text-lg'>
                            36 <b>+</b>
                        </span>
                        <span className='text-sm text-cs'>
                            Лет в <span>камнеобработке</span>
                        </span>
                    </p>
                    <p className='home__data home__data-two'>
                        <span className='text-lg'>
                            300 <b>+</b>
                        </span>
                        <span className='text-sm text-cs'>
                            Завершенных <span>Проектов</span>
                        </span>
                    </p>

                    <img src={shapeOne} alt='' className='shape shape__1'></img>
                    <img src={shapeTwo} alt='' className='shape shape__2'></img>
                    <img src={shapeTwo} alt='' className='shape shape__3'></img>
                </div>
                <p className='home__text'>
                    Мой карьерный путь начался в 1990 году, с самого начала и до 2022 года я был гендиректором отдела продаж  ООО "Магия камня".
                    Наш бизнес выигрывал самые дорогие тендеры. Мы делали "Шапку мономаха" - памятник в 41 метр диаметр на Кутузовской г. Москвы, облицовывали собор "Название" и т.д.
                </p>
                <div className='home__socials'>
                    <a href='https://t.me/nikit34' className='home__social-link'>
                        <FaTelegram />
                    </a>
                    <a href='https://vk.com/id406247919' className='home__social-link'>
                        <FaVk />
                    </a>
                </div>
                <div className='home__btns'>
                    <a download='' href={CV} className='btn text-cs'>Download CV</a>
                    <a href='#skills' className='hero__link text-cs'>My Skills</a>
                </div>
            </div>
            <div className='section__deco deco__left'>
                <img src={shapeOne} alt='' className='shape'/>
            </div>
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">Web Developer</span>
        </div>
    </section>
  )
}

export default Home;
