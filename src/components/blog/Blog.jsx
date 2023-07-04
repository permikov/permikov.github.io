import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import shapeOne from '../../asserts/shape-1.png';
import Blog1 from '../../asserts/blog1.jpg';
import Blog2 from '../../asserts/blog2.jpg';
import Blog3 from '../../asserts/blog3.jpg';
import './blog.css';


const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Блог</h2>
        <p className="section__subtitle">
            Мои <span>Статьи</span>
        </p>
        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 31, 2022</span>
                <h3 className="blog__title">The Main Thing For The Designer</h3>
                <p className="blog__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper diam urna, sed sodales felis facilisis ut. Duis libero dolor, pretium vel sapien sed, tempus interdum mi
                </p>
                <a href="" className="link">
                    Read more
                    <FaArrowRight className="link__icon"></FaArrowRight>
                </a>
                <img src={Blog1} alt="" className="blog__img" />
            </div>
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 31, 2022</span>
                <h3 className="blog__title">Follow Your Own Design Process</h3>
                <p className="blog__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper diam urna, sed sodales felis facilisis ut. Duis libero dolor, pretium vel sapien sed, tempus interdum mi
                </p>
                <a href="" className="link">
                    Read more
                    <FaArrowRight className="link__icon"></FaArrowRight>
                </a>
                <img src={Blog2} alt="" className="blog__img" />
            </div>
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">NOVEMBER 28, 2022</span>
                <h3 className="blog__title">Usability Secrets to Create Better Interfaces</h3>
                <p className="blog__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper diam urna, sed sodales felis facilisis ut. Duis libero dolor, pretium vel sapien sed, tempus interdum mi
                </p>
                <a href="" className="link">
                    Read more
                    <FaArrowRight className="link__icon"></FaArrowRight>
                </a>
                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>
        <div className='section__deco deco__right'>
            <img src={shapeOne} alt='' className='shape'/>
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">Блог</span>
        </div>
    </section>
  );
};

export default Blog;
