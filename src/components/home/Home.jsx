import React from 'react'
import profileImg from '../../asserts/profile.png';
// import shapeOne from '../../asserts/shape-1.png';
// import shapeTwo from '../../asserts/shape-2.png';
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import './home.css';


export const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__container container'>
            <p className='home__subtitle text-cs'>Hello, <span>My Name Is</span></p>
            <h1 className='home__title text-cs'><span>ZOE</span> MILLER</h1>
            <p className='home__job'>
                <span className='text-cs'>I Am</span> <b>Web Developer</b>
            </p>
            <p className='home__text'>
                From France, Paris
            </p>
            <div className='home__socials'>
                <a href='https://github.com/nikit34' className='home__social-link'>
                    <FaTwitter />
                </a>
                <a href='https://github.com/nikit34' className='home__social-link'>
                    <FaDribbble />
                </a>
                <a href='https://github.com/nikit34' className='home__social-link'>
                    <FaBehance />
                </a>
            </div>
            <div className='home__btns'>
                <a href='https://github.com/' className='btn'>Download CV</a>
                <a href='https://github.com/' className='hero__link'>My Skills</a>
            </div>
        </div>
    </section>
  )
}

export default Home;
