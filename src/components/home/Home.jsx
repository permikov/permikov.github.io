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
            <p className='home__subtitle text-cs'>Hello<span>My Name Is</span></p>
            <p className='home__title text-cs'><span>ZOE</span>MILLER</p>
            <p className='home__job'>
                <span className='text-cs'>I Am</span> <b>Web DEveloper</b>
            </p>
        </div>
    </section>
  )
}

export default Home;
