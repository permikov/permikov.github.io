import React from 'react'
import profileImg from '../../asserts/profile.png';
import shapeOne from '../../asserts/shape-1.png';
import shapeTwo from '../../asserts/shape-2.png';
import CV from '../../asserts/NikitaPermyakov_CV.pdf';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './home.css';


export const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__wrapper'>
            <div className='home__container container'>
                <p className='home__subtitle text-cs'>Hello, <span>My Name Is</span></p>
                <h1 className='home__title text-cs'><span>NASTYA</span> OMIK</h1>
                <p className='home__job'>
                    <span className='text-cs'>I Am</span> <b>Lawyer</b>
                </p>
                <div className='home__img-wrapper'>
                    <div className='home__banner'>
                        <img src={profileImg} alt='' className='home__profile'></img>
                    </div>
                    <p className='home__data home__data-one'>
                        <span className='text-lg'>
                            6 <b>+</b>
                        </span>
                        <span className='text-sm text-cs'>
                            Years of <span>Experience</span>
                        </span>
                    </p>
                    <p className='home__data home__data-two'>
                        <span className='text-lg'>
                            330
                        </span>
                        <span className='text-sm text-cs'>
                            Completed <span>Projects</span>
                        </span>
                    </p>

                    <img src={shapeOne} alt='' className='shape shape__1'></img>
                    <img src={shapeTwo} alt='' className='shape shape__2'></img>
                    <img src={shapeTwo} alt='' className='shape shape__3'></img>
                </div>
                <p className='home__text'>
                    From Portugal, Lisbon
                </p>
                <div className='home__socials'>
                    <a href='https://t.me/nikit34' className='home__social-link'>
                        <FaTelegram />
                    </a>
                    <a href='https://github.com/nikit34' className='home__social-link'>
                        <FaGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/nikitapermikov/' className='home__social-link'>
                        <FaLinkedin />
                    </a>
                </div>
                <div className='home__btns'>
                    <a download='' href={CV} className='btn text-cs'>Download CV</a>
                    <a href='#skills' className='hero__link text-cs'>My Skills</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;
